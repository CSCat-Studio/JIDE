import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      {/* 头像和昵称 */}
      <View style={styles.profileContainer}>
        <View style={styles.avatarWrapper}>
          <Image
            source={require('@/assets/images/react-logo.png')}
            style={styles.avatar}
          />
        </View>
        <Text style={styles.nickname}>cc</Text>
      </View>

      {/* Account 区域 */}
      <ThemedText type="title" style={styles.sectionTitle}>Account</ThemedText>
      <TouchableOpacity style={styles.accountRow}>
        <IconSymbol name="person.crop.circle" size={28} color="#333" />
        <Text style={styles.accountText}>account management</Text>
      </TouchableOpacity>

      {/* Learning 区域 */}
      <ThemedText type="title" style={styles.sectionTitle}>Learning</ThemedText>
      <View style={styles.learningRow}>
        <View style={styles.learningBox} />
        <View style={styles.learningBox} />
      </View>

      {/* 底部导航栏占位 */}
      <View style={styles.tabBarPlaceholder}>
        <IconSymbol name="house" size={28} color="#888" />
        <IconSymbol name="book" size={28} color="#888" />
        <IconSymbol name="person" size={28} color="#888" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  avatarWrapper: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  nickname: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionTitle: {
    marginTop: 16,
    marginBottom: 8,
  },
  accountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  accountText: {
    marginLeft: 12,
    fontSize: 16,
  },
  learningRow: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 8,
    marginBottom: 16,
  },
  learningBox: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    backgroundColor: '#fafafa',
  },
  tabBarPlaceholder: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },
}); 