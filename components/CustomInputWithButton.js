import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from '../styles/CustomInputWithButton.styles';

const CustomInputWithButton = ({ value, onChangeText, placeholder, onSubmit, buttonText = 'Add'}) => (
    <View style={styles.inputContainer}>
        <TextInput
         style={styles.textInput}
         placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
        returnKeyType="done"
         />
    <TouchableOpacity style={styles.addButton} onPress={onSubmit}>
      <Text style={styles.addButtonText}>{buttonText}</Text>
    </TouchableOpacity>
  </View>
);

export default CustomInputWithButton;