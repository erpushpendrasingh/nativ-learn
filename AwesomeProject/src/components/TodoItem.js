import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const TodoItem = ({todo, onDelete, onToggle}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onToggle(todo.id)}>
        <Text
          style={[
            styles.todoText,
            {textDecorationLine: todo.completed ? 'line-through' : 'none'},
          ]}>
          {todo.text}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onDelete(todo.id)}
        style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  todoText: {
    fontSize: 18,
  },
  deleteButton: {
    backgroundColor: '#ff6347',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default TodoItem;
