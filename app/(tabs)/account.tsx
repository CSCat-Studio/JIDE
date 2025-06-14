import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';

const AccountScreen: React.FC = () => {
  const { width } = useWindowDimensions();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* 顶部设置按钮 */}
        <View style={styles.headerRightOnly}>
          <TouchableOpacity style={styles.headerIcon}>
            <Text style={{ fontSize: 24, color: '#121717' }}>⚙️</Text>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* 头像与昵称 */}
          <View style={styles.profileSection}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwG1jqtycffQjZGDmyRXDfbfJaQaJqOoSXcE1IdKnlplqIB_1-woYXuK843F5YyBbQw8aem2xHE8TlVMNz9sarbVF7hhsPl5JPFjdCNsKTHT5Ia6YBocPLrmNb4iyvdqI9kt2jxOy1wvMQbledvwe6nG1YZJZRjZmtOELq-gdihJeXEp-1LoKjK5EYn0tw8pwG-GuiFV9NiSx9ogi0g0QtAssP1u3fzbmVEKf5i4C65NaPZeU3Kq4OmASvFZkmM7aIWE20kHq7d7I' }}
              style={[styles.avatar, { width: width * 0.32, height: width * 0.32, borderRadius: (width * 0.32) / 2 }]}
            />
            <Text style={styles.nickname}>Olivia</Text>
            <Text style={styles.uid}>UID: 987654321</Text>
          </View>

          {/* 信息卡片 */}
          <InfoCard icon="👤" title="Nickname" subtitle="Level 10" />
          <InfoCard icon="📱" title="Phone" subtitle="+1 555-987-6543" />
          <InfoCard icon="✉️" title="Email" subtitle="olivia.brown@email.com" />
          <InfoCard icon="💬" title="WeChat" subtitle="立刻绑定" />
          <InfoCard icon="" title="Apple ID" subtitle="立刻绑定" />

          {/* 登出按钮 */}
          <View style={styles.logoutWrap}>
            <TouchableOpacity style={styles.logoutBtn}>
              <Text style={styles.logoutText}>Log out</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const InfoCard = ({ icon, title, subtitle }: { icon: string; title: string; subtitle?: string }) => (
  <View style={styles.infoCard}>
    <View style={styles.infoIconWrap}>
      <Text style={styles.infoIcon}>{icon}</Text>
    </View>
    <View style={{ flex: 1 }}>
      <Text style={styles.infoTitle}>{title}</Text>
      {!!subtitle && <Text style={styles.infoSubtitle}>{subtitle}</Text>}
    </View>
  </View>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerRightOnly: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
    backgroundColor: '#fff',
  },
  headerIcon: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 0,
    justifyContent: 'flex-start',
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 0,
    gap: 8,
  },
  avatar: {
    backgroundColor: '#eee',
    marginBottom: 8,
  },
  nickname: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#121717',
    textAlign: 'center',
  },
  uid: {
    fontSize: 16,
    color: '#658685',
    textAlign: 'center',
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    marginHorizontal: 16,
    marginBottom: 10,
    padding: 16,
    shadowColor: '#e0e0e0',
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 1,
    borderWidth: 1,
    borderColor: '#f0f4f4',
  },
  infoIconWrap: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#f0f4f4',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  infoIcon: {
    fontSize: 24,
    color: '#121717',
  },
  infoTitle: {
    fontSize: 16,
    color: '#121717',
    fontWeight: '500',
  },
  infoSubtitle: {
    fontSize: 14,
    color: '#658685',
    marginTop: 2,
    fontStyle: 'italic',
  },
  logoutWrap: {
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 48,
  },
  logoutBtn: {
    minWidth: 84,
    height: 40,
    backgroundColor: '#27d7d1',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  logoutText: {
    color: '#121717',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 0.2,
  },
});

export default AccountScreen; 