import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import styles from '../styles/HomeScreen.styles';
import ToDoListItem from '../components/ToDoListItem';
import CustomInputWithButton from '../components/CustomInputWithButton';
import { saveLists, loadLists } from '../storage';


// const dummyLists = [
//   { id: '1', title: 'Groceries' },
//   { id: '2', title: 'Work Tasks' },
//   { id: '3', title: 'Weekend Plans' },
// ];

function HomeScreen({ navigation }) {

    const [lists, setLists] = useState([]);

    const [newListTitle, setNewListTitle] = useState('');

    //load saved list on mount
    useEffect(() => {
        const load = async () => {
            const savedLists = await loadLists();
            setLists(savedLists);
        };
            load();
    }, []);

    //save list when changed
    useEffect(() => {
        saveLists(lists);
    }, [lists]);

    const addList = () => {
        if (!newListTitle.trim()) return;

     const newList = {
        id: Date.now().toString(),
        title: newListTitle.trim(),
        items: [],
    };
    

    setLists(prevLists => [newList, ...prevLists]);

    setNewListTitle('');
    };

    const deleteList = (id) => {
    setLists(prevLists => prevLists.filter(list => list.id !== id));
    };




    const renderItem = ({ item }) => (
       <ToDoListItem    
            title={item.title}
            onPress={() =>
                     navigation.navigate('ToDoList', { listId: item.id })
            }
            onDelete={() => deleteList(item.id)}      // <-- pass delete callback
           showTrash={true}  
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