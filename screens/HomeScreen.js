import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import styles from '../styles/HomeScreen.styles';

const dummyLists = [
  { id: '1', title: 'Groceries' },
  { id: '2', title: 'Work Tasks' },
  { id: '3', title: 'Weekend Plans' },
];

function HomeScreen({ navigation }) {
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.listItem}
            onPress={() => navigation.navigate('ToDoList', { title: item.title })}
            >
                <Text style={styles.listTitle}>{item.title}</Text>
            </TouchableOpacity>
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