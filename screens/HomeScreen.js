import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('ToDoList', { title: 'My List'})}>
                <Text>Go to ToDo List</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;