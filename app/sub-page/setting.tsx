import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const unstable_settings = {
  headerShown: false,
};

const SettingScreen: React.FC = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* 自定义标题栏 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={{ fontSize: 22 }}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>设置</Text>
        <View style={{ width: 40 }} />
      </View>
      <ScrollView>
        {/* 账号相关 */}
        <SectionHeader>账号相关</SectionHeader>
        <SettingItem title="账号管理" showArrow />
        <SectionDivider />

        {/* 学习相关 */}
        <SectionHeader>学习相关</SectionHeader>
        <SettingItem title="单词发音" value="英音" showArrow />
        <SettingItem title="单词行设置" showArrow />
        <SettingItem title="长按查词设置" value="在线词典" showArrow />
        <SettingItem title="更换词书" value="日常单词" showArrow />
        <SettingItem title="同步学习数据" value="11天前" showArrow />
        <SectionDivider />

        {/* 内容相关 */}
        <SectionHeader>内容相关</SectionHeader>
        <SettingItem title="一键还原导入释义" showArrow />
        <SectionDivider />

        {/* 通用 */}
        <SectionHeader>通用</SectionHeader>
        <SettingItem title="外观主题" value="亮白" showArrow />
        <SettingItem title="字体大小" showArrow />
        <SettingItem title="学习提醒" showArrow />
        <SettingItem title="消息提醒" showArrow />
      </ScrollView>
    </View>
  );
};

const SectionHeader = ({ children }: { children: React.ReactNode }) => (
  <Text style={styles.sectionHeader}>{children}</Text>
);

const SectionDivider = () => (
  <View style={styles.sectionDivider} />
);

const SettingItem = ({
  title,
  value,
  showArrow,
}: {
  title: string;
  value?: string;
  showArrow?: boolean;
}) => (
  <TouchableOpacity style={styles.itemRow} activeOpacity={0.7}>
    <Text style={styles.itemTitle}>{title}</Text>
    <View style={styles.itemRight}>
      {value && <Text style={styles.itemValue}>{value}</Text>}
      {showArrow && <Text style={styles.itemArrow}>{'>'}</Text>}
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 36,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  backBtn: {
    width: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2a3c4c',
  },
  sectionHeader: {
    color: '#b0b3b8',
    fontSize: 13,
    marginTop: 18,
    marginBottom: 6,
    marginLeft: 18,
  },
  sectionDivider: {
    height: 8,
    backgroundColor: '#f0f4f4',
    marginVertical: 10,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 18,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f4f4',
    justifyContent: 'space-between',
  },
  itemTitle: {
    fontSize: 16,
    color: '#2a3c4c',
    fontWeight: '500',
  },
  itemRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  itemValue: {
    fontSize: 15,
    color: '#b0b3b8',
    marginRight: 8,
  },
  itemArrow: {
    fontSize: 18,
    color: '#b0b3b8',
  },
});

export default SettingScreen; 