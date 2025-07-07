import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import styles from '../styles/HomeScreen.styles';
import ToDoListItem from '../components/ToDoListItem';
import CustomInputWithButton from '../components/CustomInputWithButton';


// const dummyLists = [
//   { id: '1', title: 'Groceries' },
//   { id: '2', title: 'Work Tasks' },
//   { id: '3', title: 'Weekend Plans' },
// ];

function HomeScreen({ navigation }) {

    const [lists, setLists] = useState([]);

    const [newListTitle, setNewListTitle] = useState('');

    const addList = () => {
        if (!newListTitle.trim()) return;

     const newList = {
        id: Date.now().toString(),
        title: newListTitle.trim(),
    };

    setLists(prevLists => [newList, ...prevLists]);

    setNewListTitle('');
    };




    const renderItem = ({ item }) => (
       <ToDoListItem    
            title={item.title}
            onPress={() => navigation.navigate('ToDoList', { title: item.title })}
        />
            );

    

    return (
        
        <View style={styles.container}>
            <CustomInputWithButton
                value={newListTitle}
                onChangeText={setNewListTitle}
                placeholder="Add new list"
                onSubmit={addList}
                buttonText="+"
                />
            <FlatList
                data={lists}
                keyExtractor={(item) => item.id}
                renderItem={renderItem} />
        </View>
    );
}

export default HomeScreen;