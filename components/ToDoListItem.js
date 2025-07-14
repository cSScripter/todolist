import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../styles/ToDoListItem.styles.js';

function ToDoListItem({ title, onPress, onDelete, showTrash }) {
  return (
    <TouchableOpacity style={styles.listItem} onPress={onPress}>
    <View style={styles.rowContainer}>
      <Text style={styles.listTitle}>{title}</Text>

      {showTrash && (
        <TouchableOpacity onPress={onDelete} style={styles.trashButton}>
          <Text style={styles.trashIcon}>🗑️</Text>
        </TouchableOpacity>
      )}
      </View>
    </TouchableOpacity>
  );
}

export default ToDoListItem;