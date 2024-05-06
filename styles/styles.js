import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    paddingTop: 50,
  },
  iconSpacing: {
    marginRight: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#05f',
    alignSelf: 'flex-start',
    paddingLeft: 30,
    paddingBottom: 5,
  },
  addTaskButton: {
    width: '90%',
    padding: 10,
    borderColor: '#777',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#999',
  },
  addText: {
    color: '#05f',
    fontSize: 18,
    alignSelf: 'flex-start',
    paddingLeft: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginRight: 10,
    padding: 8,
    color: '#fff',
    backgroundColor: '#999',
    borderRadius: 5,
  },
  tasksContainer: {
    width: '100%',
    marginTop: 20,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#555',
    padding: 10,
    marginVertical: 5,
    marginLeft: '5%',
    marginRight: '5%',
    borderRadius: 10,
  },
  taskText: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
  },
  completedTask: {
    textDecorationLine: 'line-through',
  },
});

export default styles;
