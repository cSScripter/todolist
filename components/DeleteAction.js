import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/DeleteAction.styles';

const DeleteAction = ({ onDelete }) => (
        <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
    );


export default DeleteAction;