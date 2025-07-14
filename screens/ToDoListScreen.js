import React, { useState } from 'react';
import { View, Text } from 'react-native';
import ToDoItem from '../components/ToDoItem';
import styles from '../styles/ToDoListScreen.styles';
import CustomInputWithButton from '../components/CustomInputWithButton';
import DraggableFlatList from 'react-native-draggable-flatlist';

function ToDoListScreen({ route }) {
    const { title } = route.params; //title passed from navigation
    const [todos, setTodos] = useState([]);

    //added state for todo input
    const [newToDoTitle, setNewToDoTitle] = useState('');

    console.log('todos', todos);

    function toggleToDo(id) { 
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo 
    )
  );
 }
    function deleteToDo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

     function addToDo() {
        if (newToDoTitle.trim() === '') return;

        const newToDo = { 
            id: Date.now().toString(),
            title: newToDoTitle.trim(),
            completed: false,
            
        };
    setTodos((prevTodos) => [newToDo, ...prevTodos]);  // add new todo to front of list
    setNewToDoTitle('');                                // clear input field
  };

    const renderItem = ({ item, drag, isActive }) => (
        <ToDoItem
            title={item.title}
            completed={item.completed}
            onToggle={() => toggleToDo(item.id)}
            onDelete={() => deleteToDo(item.id)}   
            onLongPress={drag}
            isActive={isActive}
            showTrash={true} 
            />
    );


    return (
        <View style={styles.container}>
            <Text style={styles.listTitle}>{title}</Text>
            <CustomInputWithButton
             value={newToDoTitle}
             onChangeText={setNewToDoTitle}
             placeholder="Add new"
             onSubmit={addToDo}
             buttonText='+'
             />
    
            
            <DraggableFlatList 
                data={todos}
                keyExtractor={(item) => item.id}
                onDragEnd={({data}) => setTodos(data)}
                renderItem={renderItem}
                />
        </View>
    );
}

export default ToDoListScreen;
