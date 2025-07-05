import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import ToDoItem from '../components/ToDoItem';
import styles from '../styles/ToDoListScreen.styles';
import { TextInput } from 'react-native-gesture-handler';

function ToDoListScreen({ route }) {
    const { title } = route.params; //title passed from navigation
    const [todos, setTodos] = useState([
    { id: '1', title: 'Buy milk', completed: false },
    { id: '2', title: 'Walk the dog', completed: false },
    { id: '3', title: 'Read a book', completed: true },
    ]);

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

    const renderItem = ({ item }) => (
        <ToDoItem
            title={item.title}
            completed={item.completed}
            onToggle={() => toggleToDo(item.id)} 
            onDelete={() => deleteToDo(item.id)}
            />
    );


    return (
        <View style={styles.container}>
            <Text style={styles.listTitle}>{title}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                     placeholder="Add new to-do"
                     value={newToDoTitle}
                    onChangeText={setNewToDoTitle}
                    onSubmitEditing={addToDo}
                    returnKeyType="done" 
                    />
        <TouchableOpacity style={styles.addButton} onPress={addToDo}>
            <Text style={styles.addButtonText}>Add</Text>
       </TouchableOpacity>
            </View>
            
            <FlatList
                data={todos}
                keyExtractor={(item) => item.id}
                renderItem={renderItem} 
                />
        </View>
    );
}

export default ToDoListScreen;


// import React from 'react';
// import { View, Text } from 'react-native';

// export default function ToDoListScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Hello from ToDoListScreen!</Text>
//     </View>
//   );
// }