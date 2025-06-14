import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import WordSettingsModal from './WordSettingsModal';

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

  return (
    <SafeAreaView style={styles.container}>
      {/* 顶部栏 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.headerIcon}>☰</Text>
        </TouchableOpacity>
        <View style={styles.headerDayWrap}>
          <TouchableOpacity onPress={() => setDay(day > 1 ? day - 1 : 1)}>
            <Text style={styles.arrow}>{'<'}</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Day {day}</Text>
          <TouchableOpacity onPress={() => setDay(day + 1)}>
            <Text style={styles.arrow}>{'>'}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.headerIcon}>🔍</Text>
        </TouchableOpacity>
      </View>
      {/* 当前List显示 */}
      <View style={styles.currentListWrap}>
        <TouchableOpacity style={styles.listSwitchBtn} onPress={() => setListIndex((listIndex + 1) % lists.length)}>
          <Text style={styles.currentListText}>
            当前列表：{lists[listIndex]} <Text style={styles.listArrow}>▼</Text>
          </Text>
        </TouchableOpacity>
      </View>
      {/* 单词列表 */}
      <ScrollView style={styles.wordList} contentContainerStyle={{ paddingBottom: 16 }}>
        {wordList.map((item) => (
          <View key={item.id} style={styles.wordCard}>
            <View style={[styles.numBox, item.starred && styles.numBoxStarred]}> 
              {item.starred ? (
                <Text style={styles.star}>★</Text>
              ) : null}
              <Text style={styles.numText}>{item.id}</Text>
            </View>
            <View style={styles.leftColVertical}>
              <Text style={styles.wordCell}>{item.word}</Text>
              <Text style={styles.posCell}>{item.pos}</Text>
            </View>
            <View style={styles.meaningColBox}>
              <Text style={styles.enCell}>{item.en}</Text>
              <Text style={styles.zhCell}>{item.zh}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      {/* 底部导航栏 */}
      <View style={styles.bottomNav}>
        {lists.map((l, i) => (
          <TouchableOpacity key={l} style={styles.navItem} onPress={() => setListIndex(i)}>
            <Text style={[styles.navText, i === listIndex && styles.activeNav]}>{l}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* 设置弹窗 */}
      <WordSettingsModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        displayMode={displayMode}
        setDisplayMode={setDisplayMode}
        sortMode={sortMode}
        setSortMode={setSortMode}
      />
    </SafeAreaView>
  );
};

export default WordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f8fa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 4,
    backgroundColor: '#f7f8fa',
  },
  headerButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIcon: {
    fontSize: 22,
    color: '#222',
  },
  headerDayWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  arrow: {
    fontSize: 22,
    color: '#b0b3b8',
    marginHorizontal: 4,
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginHorizontal: 8,
  },
  currentListWrap: {
    alignItems: 'center',
    marginBottom: 8,
  },
  listSwitchBtn: {
    borderWidth: 1,
    borderColor: '#d0d7e2',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 6,
    backgroundColor: '#f7f8fa',
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentListText: {
    fontSize: 14,
    color: '#58728d',
    fontWeight: '500',
  },
  listArrow: {
    fontSize: 12,
    color: '#b0b3b8',
    marginLeft: 2,
  },
  wordList: {
    flex: 1,
    paddingHorizontal: 10,
  },
  wordCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 12,
    paddingVertical: 14,
    paddingHorizontal: 10,
    shadowColor: '#e0e0e0',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 1,
  },
  numBox: {
    width: 32,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#eaf1fb',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    position: 'relative',
  },
  numBoxStarred: {
    backgroundColor: '#ffdbe0',
  },
  star: {
    color: '#ff5a7a',
    fontSize: 14,
    position: 'absolute',
    left: 4,
    top: 4,
  },
  numText: {
    fontSize: 16,
    color: '#58728d',
    fontWeight: 'bold',
  },
  leftColVertical: {
    width: 90,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    marginRight: 8,
  },
  wordCell: {
    fontSize: 18,
    color: '#222',
    fontWeight: 'bold',
  },
  posCell: {
    fontSize: 13,
    color: '#fff',
    backgroundColor: '#8ab4f8',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    textAlign: 'center',
    overflow: 'hidden',
  },
  meaningColBox: {
    width: 110,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 48,
  },
  enCell: {
    fontSize: 18,
    color: '#58728d',
  },
  zhCell: {
    fontSize: 18,
    color: '#222',
  },
  bottomNav: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#e9edf1',
    backgroundColor: '#f7f8fa',
    paddingTop: 8,
    paddingBottom: 12,
    justifyContent: 'center',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navText: {
    fontSize: 15,
    color: '#b0b3b8',
    fontWeight: '500',
    paddingVertical: 4,
    borderRadius: 8,
  },
  activeNav: {
    color: '#fff',
    backgroundColor: '#58728d',
    paddingHorizontal: 16,
  },
}); 