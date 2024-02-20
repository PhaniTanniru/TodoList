import React, { useState } from 'react';
import { View, Text, FlatList, Button, TextInput, StyleSheet } from 'react-native';

const ToDoScreen = () => {
  const [tasks, setTasks] = useState([
    { id: '1', task: 'Get groceries' },
    { id: '2', task: 'Check Mails' },
  ]);
  const [input, setInput] = useState('');

  const addTask = () => {
    setTasks([...tasks, { id: Date.now().toString(), task: input }]);
    setInput('');
  };

  return (
    <View>
      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Enter a task"
      />
      <Button title="Add Task" onPress={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.task}</Text>}
      />
    </View>
  );
}

export default ToDoScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });