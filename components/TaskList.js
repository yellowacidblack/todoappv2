import React from 'react';
import { ScrollView } from 'react-native';
import TaskItem from './TaskItem';
import styles from '../styles/styles';

const TaskList = ({ tasks, setTasks }) => {
  return (
    <ScrollView style={styles.tasksContainer}>
      {tasks.map((item, index) => (
        <TaskItem key={index} item={item} index={index} tasks={tasks} setTasks={setTasks} />
      ))}
    </ScrollView>
  );
};

export default TaskList;
