import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/ToDoItem.styles';

function ToDoItem({ title, completed, onToggle, onDelete, onLongPress, isActive, showTrash }) {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onToggle} onLongPress={onLongPress}>
      <View style={styles.rowContainer}>
        <Text style={[styles.itemText, completed && styles.completedText]}>{title}</Text>

        {showTrash && (
          <TouchableOpacity onPress={onDelete} style={styles.trashButton}>
            <Text style={styles.trashIcon}>🗑️</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
}

export default ToDoItem;