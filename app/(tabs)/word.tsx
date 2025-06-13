import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WordScreen() {
  return (
    <View style={styles.container}>
      {/* 顶部占位 */}
      <View style={{ height: 40 }} />

      {/* 单词内容 */}
      <View style={styles.wordSection}>
        <Text style={styles.word}>seraphic</Text>
        <Text style={styles.phonetic}>sə'ræfɪk</Text>
        <Text style={styles.meaning}>(adj.) Angelic, sweet</Text>
        <Text style={styles.example}>
          The child's seraphic voice matched her innocent appearance.
        </Text>
      </View>

      {/* 操作栏 */}
      <View style={styles.actionBar}>
        <TouchableOpacity>
          <Text style={styles.icon}>🔗</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.icon}>🔊</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.icon}>❤️</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.icon}>🔖</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f5ec',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wordSection: {
    alignItems: 'center',
    marginTop: 40,
  },
  word: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#222',
  },
  phonetic: {
    fontSize: 24,
    color: '#888',
    marginVertical: 12,
    fontStyle: 'italic',
  },
  meaning: {
    fontSize: 18,
    marginVertical: 8,
    color: '#333',
  },
  example: {
    fontSize: 16,
    color: '#444',
    marginTop: 24,
    textAlign: 'center',
    maxWidth: 320,
  },
  actionBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 40,
    marginBottom: 40,
  },
  icon: {
    fontSize: 28,
    marginHorizontal: 10,
  },
}); 