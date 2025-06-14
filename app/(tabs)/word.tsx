import React, { useState } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, useColorScheme } from 'react-native';
import styled, { DefaultTheme } from 'styled-components/native';
import WordSettingsModal from '../../components/WordSettingsModal';

interface WordItem {
  id: number;
  word: string;
  pos: string;
  en: string;
  zh: string;
  starred?: boolean;
}

const wordList: WordItem[] = [
  { id: 1, word: 'Apfel', pos: 'm', en: 'apple', zh: '苹果', starred: false },
  { id: 2, word: 'Lampe', pos: 'f', en: 'lamp', zh: '灯', starred: true },
  { id: 3, word: 'schreiben', pos: 'vt', en: 'write', zh: '写', starred: false },
  { id: 4, word: 'schön', pos: 'adj', en: 'beautiful', zh: '美丽的', starred: false },
  { id: 5, word: 'Buch', pos: 'n', en: 'book', zh: '书', starred: false },
  { id: 6, word: 'laufen', pos: 'vi', en: 'run', zh: '跑', starred: false },
  { id: 7, word: 'groß', pos: 'adj', en: 'big', zh: '大的', starred: false },
  { id: 8, word: 'Blume', pos: 'f', en: 'flower', zh: '花', starred: true },
  { id: 9, word: 'klein', pos: 'adj', en: 'small', zh: '小的', starred: false },
];

const lists = ['List1', 'List2', 'List3'];

const WordScreen: React.FC = () => {
  const [day, setDay] = useState<number>(1);
  const [listIndex, setListIndex] = useState<number>(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [displayMode, setDisplayMode] = useState('cn-en');
  const [sortMode, setSortMode] = useState('origin');
  const colorScheme = useColorScheme();

  return (
    <Container>
      <Header>
        <HeaderButton onPress={() => setModalVisible(true)}>
          <HeaderIcon>☰</HeaderIcon>
        </HeaderButton>
        <HeaderDayWrap>
          <TouchableOpacity onPress={() => setDay(day > 1 ? day - 1 : 1)}>
            <Arrow>{'<'}</Arrow>
          </TouchableOpacity>
          <HeaderTitle>Day {day}</HeaderTitle>
          <TouchableOpacity onPress={() => setDay(day + 1)}>
            <Arrow>{'>'}</Arrow>
          </TouchableOpacity>
        </HeaderDayWrap>
        <HeaderButton>
          <HeaderIcon>🔍</HeaderIcon>
        </HeaderButton>
      </Header>

      <CurrentListWrap>
        <ListSwitchButton onPress={() => setListIndex((listIndex + 1) % lists.length)}>
          <CurrentListText>
            当前列表：{lists[listIndex]} <ListArrow>▼</ListArrow>
          </CurrentListText>
        </ListSwitchButton>
      </CurrentListWrap>

      <WordList contentContainerStyle={{ paddingBottom: 16 }}>
        {wordList.map((item, idx) => (
          <React.Fragment key={item.id}>
            <WordCard>
              <LeftColVertical>
                <NumBox starred={item.starred}>
                  {item.starred && <Star>★</Star>}
                  <NumText>{item.id}</NumText>
                </NumBox>
                <WordInfoCol>
                  <WordCell>{item.word}</WordCell>
                  <PosTagWrapper><PosTag>{item.pos}</PosTag></PosTagWrapper>
                </WordInfoCol>
              </LeftColVertical>
              <MeaningColBox>
                <EnCell>{item.en}</EnCell>
                <ZhCell>{item.zh}</ZhCell>
              </MeaningColBox>
            </WordCard>
            {idx === wordList.length - 1 && (
              <CheckinBtnWrap>
                <CheckinBtn activeOpacity={0.8}>
                  <CheckinBtnText>List 打卡</CheckinBtnText>
                </CheckinBtn>
              </CheckinBtnWrap>
            )}
          </React.Fragment>
        ))}
      </WordList>

      <BottomNav>
        {lists.map((l, i) => (
          <NavItem key={l} onPress={() => setListIndex(i)}>
            <NavText active={i === listIndex}>{l}</NavText>
          </NavItem>
        ))}
      </BottomNav>

      <WordSettingsModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        displayMode={displayMode}
        setDisplayMode={setDisplayMode}
        sortMode={sortMode}
        setSortMode={setSortMode}
      />
    </Container>
  );
};

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props: { theme: DefaultTheme }) => props.theme.colors.background};
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: ${(props: { theme: DefaultTheme }) => props.theme.colors.background};
`;

const HeaderButton = styled(TouchableOpacity)`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

const HeaderIcon = styled.Text`
  font-size: 22px;
  color: ${(props: { theme: DefaultTheme }) => props.theme.colors.text};
`;

const HeaderDayWrap = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const Arrow = styled.Text`
  font-size: 22px;
  color: ${(props: { theme: DefaultTheme }) => props.theme.colors.secondary};
  margin-horizontal: 4px;
  font-weight: bold;
`;

const HeaderTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props: { theme: DefaultTheme }) => props.theme.colors.text};
  margin-horizontal: 8px;
`;

const CurrentListWrap = styled.View`
  align-items: center;
  margin-bottom: 8px;
`;

const ListSwitchButton = styled(TouchableOpacity)`
  border-width: 1px;
  border-color: ${(props: { theme: DefaultTheme }) => props.theme.colors.border};
  border-radius: 16px;
  padding-horizontal: 16px;
  padding-vertical: 6px;
  background-color: ${(props: { theme: DefaultTheme }) => props.theme.colors.background};
  flex-direction: row;
  align-items: center;
  shadow-color: #000;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.08;
  shadow-radius: 2px;
  elevation: 1;
`;

const CurrentListText = styled.Text`
  font-size: 14px;
  color: ${(props: { theme: DefaultTheme }) => props.theme.colors.primary};
  font-weight: 500;
`;

const ListArrow = styled.Text`
  font-size: 12px;
  color: ${(props: { theme: DefaultTheme }) => props.theme.colors.secondary};
  margin-left: 2px;
`;

const WordList = styled(ScrollView)`
  flex: 1;
  padding-horizontal: 10px;
`;

const WordCard = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${(props: { theme: DefaultTheme }) => props.theme.colors.card};
  border-radius: 16px;
  margin-bottom: 16px;
  padding: 14px;
  min-height: 48px;
  shadow-color: ${(props: { theme: DefaultTheme }) => props.theme.colors.shadow};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.08;
  shadow-radius: 4px;
  elevation: 1;
`;

const LeftColVertical = styled.View`
  flex-direction: row;
  align-items: flex-start;
  width: 40%;
  margin-right: 8px;
`;

const NumBox = styled.View<{ starred?: boolean }>`
  width: 32px;
  border-radius: 12px;
  background-color: ${(props: { theme: DefaultTheme; starred?: boolean }) =>
    props.starred ? props.theme.colors.starred : props.theme.colors.primaryLight};
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  align-self: stretch;
  shadow-color: #000;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.05;
  shadow-radius: 2px;
  elevation: 1;
`;

const Star = styled.Text`
  color: ${(props: { theme: DefaultTheme }) => props.theme.colors.star};
  font-size: 14px;
  position: absolute;
  left: 4px;
  top: 4px;
`;

const NumText = styled.Text`
  font-size: 16px;
  color: ${(props: { theme: DefaultTheme }) => props.theme.colors.primary};
  font-weight: bold;
`;

const WordInfoCol = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

const WordCell = styled.Text`
  font-size: 16px;
  color: ${(props: { theme: DefaultTheme }) => props.theme.colors.text};
  font-weight: bold;
`;

const PosTagWrapper = styled.View`
  border-radius: 12px;
  background-color: ${(props: { theme: DefaultTheme }) => props.theme.colors.primaryLight};
  align-self: flex-start;
  margin-top: 6px;
  shadow-color: #000;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.08;
  shadow-radius: 2px;
  elevation: 1;
`;

const PosTag = styled.Text`
  font-size: 13px;
  color: ${(props: { theme: DefaultTheme }) => props.theme.colors.primary};
  border-radius: 12px;
  padding-horizontal: 8px;
  padding-vertical: 2px;
  text-align: center;
  overflow: hidden;
`;

const MeaningColBox = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-left: 8px;
  gap: 6px;
`;

const EnCell = styled.Text`
  font-size: 16px;
  color: ${(props: { theme: DefaultTheme }) => props.theme.colors.primary};
`;

const ZhCell = styled.Text`
  font-size: 14px;
  color: ${(props: { theme: DefaultTheme }) => props.theme.colors.text};
`;

const BottomNav = styled.View`
  flex-direction: row;
  border-top-width: 1px;
  border-top-color: ${(props: { theme: DefaultTheme }) => props.theme.colors.border};
  background-color: ${(props: { theme: DefaultTheme }) => props.theme.colors.background};
  padding-top: 8px;
  padding-bottom: 12px;
  justify-content: center;
`;

const NavItem = styled(TouchableOpacity)`
  flex: 1;
  align-items: center;
`;

const NavText = styled.Text<{ active?: boolean }>`
  font-size: 15px;
  color: ${(props: { theme: DefaultTheme; active?: boolean }) => 
    props.active ? props.theme.colors.background : props.theme.colors.secondary};
  font-weight: 500;
  padding-vertical: 4px;
  border-radius: 8px;
  background-color: ${(props: { theme: DefaultTheme; active?: boolean }) => 
    props.active ? props.theme.colors.primary : 'transparent'};
  padding-horizontal: ${(props: { active?: boolean }) => props.active ? '16px' : '0'};
`;

const CheckinBtnWrap = styled.View`
  align-items: center;
  margin-bottom: 16px;
  margin-top: 8px;
`;

const CheckinBtn = styled.TouchableOpacity`
  background-color: #58728d;
  border-radius: 22px;
  padding-horizontal: 36px;
  padding-vertical: 12px;
  shadow-color: #58728d;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.12;
  shadow-radius: 6px;
  elevation: 2;
`;

const CheckinBtnText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
`;

export default WordScreen; 