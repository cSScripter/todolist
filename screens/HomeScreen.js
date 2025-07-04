import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import styles from '../styles/HomeScreen.styles';
import ToDoListItem from '../components/ToDoListItem';

const dummyLists = [
  { id: '1', title: 'Groceries' },
  { id: '2', title: 'Work Tasks' },
  { id: '3', title: 'Weekend Plans' },
];

function HomeScreen({ navigation }) {
    const renderItem = ({ item }) => (
       <ToDoListItem    
            title={item.title}
            onPress={() => navigation.navigate('ToDoList', { title: item.title })}
        />
            );

    

    return (
        <View style={styles.container}>
            <FlatList
                data={dummyLists}
                keyExtractor={(item) => item.id}
                renderItem={renderItem} />
        </View>
    );
}

export default HomeScreen;