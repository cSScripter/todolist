import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ToDoItem from '../components/ToDoItem';
import styles from '../styles/ToDoListScreen.styles';

function ToDoListScreen({ route }) {
    const { title } = route.params; //title passed from navigation
    const [todos, setTodos] = useState([
    { id: '1', title: 'Buy milk', completed: false },
    { id: '2', title: 'Walk the dog', completed: false },
    { id: '3', title: 'Read a book', completed: true },
    ]);

    console.log('todos', todos);

    function toggleToDo(id) {
        setTodos((prevTodos) =>
        prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
 }
    const renderItem = ({ item }) => (
        <ToDoItem
            title={item.title}
            completed={item.completed}
            onToggle={() => toggleToDo(item.id)} 
            />
    );

    return (
        <View style={styles.container}>
            <Text style={styles.listTitle}>{title}</Text>
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