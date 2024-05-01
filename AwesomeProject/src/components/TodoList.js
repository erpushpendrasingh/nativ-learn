import React from 'react';
import {View, FlatList} from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({todos, onDelete, onToggle}) => {
  const renderItem = ({item}) => (
    <TodoItem todo={item} onDelete={onDelete} onToggle={onToggle} />
  );

  return (
    <View>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default TodoList;
