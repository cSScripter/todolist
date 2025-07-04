import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/ToDoListItem.styles.js';

function ToDoListItem({ title, onPress }) {
    return (
        <TouchableOpacity style={styles.listItem} onPress={onPress}>
            <Text style={styles.listTitle}>{title}</Text>
        </TouchableOpacity>
    );
}

export default ToDoListItem;