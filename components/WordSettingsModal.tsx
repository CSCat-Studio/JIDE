import React from 'react';
import { Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface WordSettingsModalProps {
  visible: boolean;
  onClose: () => void;
  displayMode: string;
  setDisplayMode: (mode: string) => void;
  sortMode: string;
  setSortMode: (mode: string) => void;
}

const displayModes = [
  { key: 'cn-en', label: '中英显示' },
  { key: 'mask-cn', label: '遮罩中文' },
  { key: 'mask-en', label: '遮罩英文' },
];

const sortModes = [
  { key: 'origin', label: '原始排序' },
  { key: 'alpha', label: '字母正序' },
  { key: 'random', label: '随机乱序' },
  { key: 'star', label: '标记排序' },
];

const WordSettingsModal: React.FC<WordSettingsModalProps> = ({
  visible,
  onClose,
  displayMode,
  setDisplayMode,
  sortMode,
  setSortMode,
}) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose} />
      <View style={styles.modalBox}>
        {/* 单词显示 */}
        <Text style={styles.sectionTitle}>单词显示</Text>
        <View style={styles.rowBtnGroup}>
          {displayModes.map((mode) => (
            <TouchableOpacity
              key={mode.key}
              style={[styles.switchBtn, displayMode === mode.key && styles.switchBtnActive]}
              onPress={() => setDisplayMode(mode.key)}
            >
              <Text style={[styles.switchBtnText, displayMode === mode.key && styles.switchBtnTextActive]}>{mode.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* 单词排序 */}
        <Text style={styles.sectionTitle}>单词排序</Text>
        <View style={styles.rowBtnGroup}>
          {sortModes.map((mode) => (
            <TouchableOpacity
              key={mode.key}
              style={[styles.switchBtn, sortMode === mode.key && styles.switchBtnActive]}
              onPress={() => setSortMode(mode.key)}
            >
              <Text style={[styles.switchBtnText, sortMode === mode.key && styles.switchBtnTextActive]}>{mode.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* 单词训练 */}
        <Text style={styles.sectionTitle}>单词训练</Text>
        <View style={styles.trainList}>
          <View style={styles.trainItem}>
            <Text style={styles.trainIcon}>🎧</Text>
            <Text style={styles.trainText}>随身听</Text>
            <Text style={styles.trainArrow}>›</Text>
          </View>
          <View style={styles.trainItem}>
            <Text style={styles.trainIcon}>⌨️</Text>
            <Text style={styles.trainText}>单词拼写</Text>
            <Text style={styles.trainArrow}>›</Text>
          </View>
          <View style={styles.trainItem}>
            <Text style={styles.trainIcon}>📝</Text>
            <Text style={styles.trainText}>选择题测试</Text>
            <Text style={styles.trainArrow}>›</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.18)',
  },
  modalBox: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 8,
  },
  sectionTitle: {
    fontSize: 15,
    color: '#7b8591',
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 18,
  },
  rowBtnGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  switchBtn: {
    flex: 1,
    backgroundColor: '#f3f5f8',
    borderRadius: 10,
    paddingVertical: 8,
    alignItems: 'center',
    marginHorizontal: 2,
  },
  switchBtnActive: {
    backgroundColor: '#e0e8f7',
  },
  switchBtnText: {
    fontSize: 15,
    color: '#7b8591',
    fontWeight: '500',
  },
  switchBtnTextActive: {
    color: '#2a3c4c',
    fontWeight: '700',
  },
  trainList: {
    marginTop: 8,
    backgroundColor: '#f7f8fa',
    borderRadius: 14,
    paddingVertical: 2,
    paddingHorizontal: 2,
  },
  trainItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e9edf1',
  },
  trainIcon: {
    fontSize: 20,
    marginRight: 12,
    color: '#6bb6e6',
  },
  trainText: {
    fontSize: 16,
    color: '#2a3c4c',
    flex: 1,
  },
  trainArrow: {
    fontSize: 18,
    color: '#b0b3b8',
    marginLeft: 8,
  },
});

export default WordSettingsModal; 