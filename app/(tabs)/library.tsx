import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const BookInfoCard = () => (
  <View style={styles.bookInfoCard}>
    <View style={styles.bookIconWrap}>
      <Text style={styles.bookIcon}>📖</Text>
    </View>
    <View style={styles.bookInfoText}>
      <Text style={styles.bookTitle}>德语 B1</Text>
      <View style={styles.bookStatsRow}>
        <View style={styles.statCol}>
          <Text style={styles.statNum}>120</Text>
          <Text style={styles.statLabel}>已学</Text>
        </View>
        <View style={styles.statCol}>
          <Text style={styles.statNum}>80</Text>
          <Text style={styles.statLabel}>未学</Text>
        </View>
      </View>
    </View>
  </View>
);

const WordTagCard = ({ icon, label, color }: { icon: string; label: string; color: string }) => (
  <TouchableOpacity style={[styles.tagCard, { backgroundColor: color }]}> 
    <Text style={styles.tagIcon}>{icon}</Text>
    <Text style={styles.tagLabel}>{label}</Text>
  </TouchableOpacity>
);

const WordLibraryItem = ({ icon, title, count, showAdd, onAdd }: { icon: string; title: string; count?: string; showAdd?: boolean; onAdd?: () => void }) => (
  <View style={styles.libraryItem}>
    <View style={styles.libraryIconWrap}>
      <Text style={styles.libraryIcon}>{icon}</Text>
    </View>
    <Text style={styles.libraryTitle}>{title}{count ? ` (${count})` : ''}</Text>
    {showAdd && (
      <TouchableOpacity style={styles.inlineAddBtn} onPress={onAdd}>
        <Text style={styles.inlineAddBtnText}>＋</Text>
      </TouchableOpacity>
    )}
  </View>
);

const WordLibraryScreen: React.FC = () => (
  <ScrollView style={styles.container}>
    <BookInfoCard />
    <View style={styles.tagsRow}>
      <WordTagCard icon="⭐" label="生词本" color="#FFF9E5" />
      <WordTagCard icon="✅" label="熟知词" color="#E5F7F6" />
    </View>
    <View style={styles.libraryListWrap}>
      <View style={styles.ribbon}>
        <Text style={styles.ribbonText}>Word Library</Text>
      </View>
      <WordLibraryItem icon="📚" title="我的词书" count="0/3" showAdd onAdd={() => {}} />
      <WordLibraryItem icon="A" title="德语 A1" />
      <WordLibraryItem icon="A" title="德语 A2" />
      <WordLibraryItem icon="B" title="德语 B1" />
    </View>
  </ScrollView>
);

export default WordLibraryScreen;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F8F6F1',
    paddingTop: 56,
  },
  bookInfoCard: {
    flexDirection: 'row',
    backgroundColor: '#F3EDE2',
    borderRadius: 18,
    margin: 18,
    padding: 18,
    alignItems: 'center',
    shadowColor: '#E0D6C3',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 2,
  },
  bookIconWrap: {
    width: 54, height: 54, borderRadius: 12, backgroundColor: '#E5EAF3',
    alignItems: 'center', justifyContent: 'center', marginRight: 18,
  },
  bookIcon: { fontSize: 32 },
  bookInfoText: { flex: 1 },
  bookTitle: { fontSize: 22, fontWeight: 'bold', color: '#2A3C4C', marginBottom: 8 },
  bookStatsRow: { flexDirection: 'row', gap: 24 },
  statCol: { alignItems: 'center' },
  statNum: { fontSize: 20, fontWeight: 'bold', color: '#58728d' },
  statLabel: { fontSize: 13, color: '#7b8591' },
  tagsRow: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 18 },
  tagCard: {
    flexDirection: 'row', alignItems: 'center', borderRadius: 18, paddingVertical: 12, paddingHorizontal: 28,
    shadowColor: '#E0D6C3', shadowOpacity: 0.08, shadowRadius: 4, elevation: 1,
  },
  tagIcon: { fontSize: 22, marginRight: 10 },
  tagLabel: { fontSize: 17, fontWeight: 'bold', color: '#2A3C4C' },
  libraryListWrap: { margin: 18, marginTop: 0 },
  ribbon: {
    backgroundColor: '#5AC8A6', alignSelf: 'flex-start', borderTopLeftRadius: 8, borderBottomRightRadius: 8,
    paddingHorizontal: 16, paddingVertical: 4, marginBottom: 10,
  },
  ribbonText: { color: '#fff', fontWeight: 'bold', fontSize: 15, letterSpacing: 1 },
  libraryItem: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 14,
    padding: 16, marginBottom: 10, shadowColor: '#E0D6C3', shadowOpacity: 0.06, shadowRadius: 2, elevation: 1,
  },
  libraryIconWrap: {
    width: 36, height: 36, borderRadius: 18, backgroundColor: '#F3EDE2',
    alignItems: 'center', justifyContent: 'center', marginRight: 16,
  },
  libraryIcon: { fontSize: 18, color: '#7b8591' },
  libraryTitle: { fontSize: 16, color: '#2A3C4C', fontWeight: '500' },
  inlineAddBtn: {
    marginLeft: 10,
    backgroundColor: '#E5EAF3',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 2,
    shadowColor: '#E0D6C3',
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 1,
  },
  inlineAddBtnText: {
    fontSize: 20,
    color: '#7b8591',
    fontWeight: 'bold',
    lineHeight: 22,
  },
}); 