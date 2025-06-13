import { IconSymbol } from '@/components/ui/IconSymbol';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      {/* 顶部导航栏 */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconButton}>
          <IconSymbol name="bell" size={24} color="#101418" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <IconSymbol name="gear" size={24} color="#101418" />
        </TouchableOpacity>
      </View>

      {/* 个人资料区域 */}
      <View style={styles.profileSection}>
        <View style={styles.avatarWrapper}>
          <Image
            source={require('@/assets/images/react-logo.png')}
            style={styles.avatar}
          />
        </View>
        <Text style={styles.nickname}>Ethan</Text>
        <Text style={styles.username}>@ethan_vocab</Text>
      </View>

      {/* 功能卡片网格 */}
      <View style={styles.cardsGrid}>
        <TouchableOpacity style={styles.card}>
          <IconSymbol name="book" size={24} color="#101418" />
          <Text style={styles.cardTitle}>My Words</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <IconSymbol name="list.bullet" size={24} color="#101418" />
          <Text style={styles.cardTitle}>Lists</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <IconSymbol name="chart.pie" size={24} color="#101418" />
          <Text style={styles.cardTitle}>Progress</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <IconSymbol name="person.2" size={24} color="#101418" />
          <Text style={styles.cardTitle}>Friends</Text>
        </TouchableOpacity>
      </View>

      {/* 底部导航栏 */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <IconSymbol name="book.fill" size={24} color="#101418" />
          <Text style={[styles.tabText, styles.tabTextActive]}>Learn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <IconSymbol name="magnifyingglass" size={24} color="#5c728a" />
          <Text style={styles.tabText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <IconSymbol name="plus.square" size={24} color="#5c728a" />
          <Text style={styles.tabText}>Create</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <IconSymbol name="person" size={24} color="#5c728a" />
          <Text style={styles.tabText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  iconButton: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  avatarWrapper: {
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  nickname: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#101418',
    marginBottom: 4,
  },
  username: {
    fontSize: 16,
    color: '#5c728a',
  },
  cardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    gap: 12,
  },
  card: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 16,
    backgroundColor: '#f9fafb',
    borderWidth: 1,
    borderColor: '#d4dbe2',
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#101418',
  },
  tabBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: '#f9fafb',
    borderTopWidth: 1,
    borderTopColor: '#eaedf1',
    paddingTop: 8,
    paddingBottom: 20,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  tabText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#5c728a',
  },
  tabTextActive: {
    color: '#101418',
  },
}); 