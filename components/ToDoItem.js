import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../styles/ToDoItem.styles';


function ToDoItem({ title, completed, onToggle, onDelete, onLongPress, isActive }) {

    return (
        <TouchableOpacity style={styles.itemContainer} onPress={onToggle} onLongPress={onLongPress}>
            <Text style={[styles.itemText, completed && styles.completedText]}>{title}</Text>
        </TouchableOpacity>
    );
}

export default ToDoItem;