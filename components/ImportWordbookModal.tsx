import React from 'react';
import { Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ImportWordbookModalProps {
  visible: boolean;
  onClose: () => void;
  onImportNewWords?: () => void;
  onImportExcel?: () => void;
  onImportTxt?: () => void;
}

const ImportWordbookModal: React.FC<ImportWordbookModalProps> = ({
  visible,
  onClose,
  onImportNewWords,
  onImportExcel,
  onImportTxt,
}) => {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose} />
      <View style={styles.modalBox}>
        <Text style={styles.title}>导入词书</Text>
        <TouchableOpacity style={styles.button} onPress={onImportNewWords}>
          <Text style={styles.buttonText}>生词本导入</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onImportExcel}>
          <Text style={styles.buttonText}>Excel 导入</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onImportTxt}>
          <Text style={styles.buttonText}>txt 导入</Text>
        </TouchableOpacity>
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
    left: 32,
    right: 32,
    top: '30%',
    backgroundColor: '#f8f6f1',
    borderRadius: 18,
    padding: 28,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.10,
    shadowRadius: 12,
    elevation: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 28,
    letterSpacing: 2,
  },
  button: {
    width: 200,
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 14,
    marginBottom: 18,
    alignItems: 'center',
    shadowColor: '#e0d6c3',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 1,
  },
  buttonText: {
    fontSize: 18,
    color: '#222',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export default ImportWordbookModal; 