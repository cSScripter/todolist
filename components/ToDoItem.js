import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import styles from '../styles/ToDoItem.styles';
import DeleteAction from './DeleteAction';

function ToDoItem({ title, completed, onToggle, onDelete }) {
    //function to render delete button on swipe
    const renderRightActions = () => <DeleteAction onDelete={onDelete} />;
    
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableOpacity style={styles.itemContainer} onPress={onToggle}>
            <Text style={[styles.itemText, completed && styles.completedText]}>{title}</Text>
        </TouchableOpacity>
        </Swipeable>
    );
}

export default ToDoItem;