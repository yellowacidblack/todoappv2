import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/styles';

const TaskInput = ({ isAdding, setIsAdding, setTasks, tasks }) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
      setIsAdding(false);
    }
  };

  return (
    <TouchableOpacity
      style={styles.addTaskButton}
      onPress={() => setIsAdding(true)}
      disabled={isAdding}
    >
      {!isAdding && <Text style={styles.addText}>+ Add a Task</Text>}
      {isAdding && (
        <View style={styles.inputContainer}>
          <TextInput
            autoFocus
            style={styles.input}
            value={task}
            onChangeText={setTask}
            placeholder="Enter a task"
          />
          <TouchableOpacity onPress={handleAddTask}>
            <Icon name="check" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default TaskInput;
