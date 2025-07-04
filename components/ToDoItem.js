import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/ToDoItem.styles';

function ToDoItem({ title, completed, onToggle }) {
    return (
        <TouchableOpacity style={styles.itemContainer} onPress={onToggle}>
            <Text style={[styles.itemText, completed && styles.completedText]}>{title}</Text>
        </TouchableOpacity>
    );
}

export default ToDoItem;