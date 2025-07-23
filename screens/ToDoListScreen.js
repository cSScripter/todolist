import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import ToDoItem from '../components/ToDoItem';
import styles from '../styles/ToDoListScreen.styles';
import CustomInputWithButton from '../components/CustomInputWithButton';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { loadLists, saveLists } from '../storage'; // ✅ Use local storage

function ToDoListScreen({ route }) {
  const { listId } = route.params; // ✅ Only getting listId, not setLists
  const [listTitle, setListTitle] = useState(''); // For screen header
  const [todos, setTodos] = useState([]);         // Todo items
  const [newToDoTitle, setNewToDoTitle] = useState('');

  // ✅ Load list from AsyncStorage when screen mounts
  useEffect(() => {
    const loadData = async () => {
      const allLists = await loadLists();
      const found = allLists.find((l) => l.id === listId);
      if (found) {
        setTodos(found.items || []);
        setListTitle(found.title);
      }
    };
    loadData();
  }, [listId]);

  //  Update todos in AsyncStorage when modified
  const updateListItems = async (newItems) => {
    const allLists = await loadLists();
    const updatedLists = allLists.map((l) =>
      l.id === listId ? { ...l, items: newItems } : l
    );
    await saveLists(updatedLists);
    setTodos(newItems);
  };

  const toggleToDo = async (id) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    await updateListItems(updated);
  };

  const deleteToDo = async (id) => {
    const filtered = todos.filter((todo) => todo.id !== id);
    await updateListItems(filtered);
  };

  const addToDo = async () => {
    if (!newToDoTitle.trim()) return;

    const newToDo = {
      id: Date.now().toString(),
      title: newToDoTitle.trim(),
      completed: false,
    };

    const updated = [newToDo, ...todos];
    await updateListItems(updated);
    setNewToDoTitle('');
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
      <Text style={styles.listTitle}>{listTitle || 'List'}</Text>

      <CustomInputWithButton
        value={newToDoTitle}
        onChangeText={setNewToDoTitle}
        placeholder="Add new"
        onSubmit={addToDo}
        buttonText="+"
      />

      <DraggableFlatList
        data={todos}
        keyExtractor={(item) => item.id}
        onDragEnd={({ data }) => updateListItems(data)}
        renderItem={renderItem}
      />
    </View>
  );
}

export default ToDoListScreen;
