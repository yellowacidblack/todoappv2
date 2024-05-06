import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import styles from './styles/styles';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TODO List</Text>
      <TaskInput
        isAdding={isAdding}
        setIsAdding={setIsAdding}
        setTasks={setTasks}
        tasks={tasks}
      />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </View>
  );
};

export default App;
