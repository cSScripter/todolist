import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import styles from '../styles/ToDoItem.styles';

function ToDoItem({ title, completed, onToggle, onDelete }) {
    //function to render delete button on swipe
    const renderRightActions = () => (
        <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
    );
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableOpacity style={styles.itemContainer} onPress={onToggle}>
            <Text style={[styles.itemText, completed && styles.completedText]}>{title}</Text>
        </TouchableOpacity>
        </Swipeable>
    );
}

export default ToDoItem;