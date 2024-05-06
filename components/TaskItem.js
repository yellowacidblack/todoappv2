import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/styles';

const TaskItem = ({ item, index, tasks, setTasks }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState('');

  const toggleCompletion = () => {
    const newTasks = tasks.map((task, idx) =>
      idx === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const startEditTask = () => {
    setEditingIndex(index);
    setEditingText(item.text);
  };

  const completeEditTask = () => {
    const newTasks = tasks.map((task, idx) =>
      idx === index ? { ...task, text: editingText } : task
    );
    setTasks(newTasks);
    setEditingIndex(null);
    setEditingText('');
  };

  const deleteTask = () => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <View style={styles.taskItem}>
      <CheckBox
        value={item.completed}
        onValueChange={toggleCompletion}
        tintColors={{ true: 'gray', false: 'white' }}
      />
      {editingIndex === index ? (
        <TextInput
          style={styles.input}
          value={editingText}
          onChangeText={setEditingText}
          onSubmitEditing={completeEditTask}
          autoFocus
        />
      ) : (
        <Text style={[styles.taskText, item.completed && styles.completedTask]}>{item.text}</Text>
      )}
      <TouchableOpacity onPress={startEditTask} style={styles.iconSpacing}>
        <Icon name="pencil" size={20} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={deleteTask}>
        <Icon name="trash" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default TaskItem;
