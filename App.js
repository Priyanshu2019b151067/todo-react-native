import { StatusBar } from 'expo-status-bar';
import Adder from './components/Adder';
import React from 'react';
import Todo from './components/Todo';
import Header from './components/Header'
import { StyleSheet, Text, View,FlatList } from 'react-native';
import { useState } from 'react';
export default function App() {
  const handleTouch = (id) =>{
    settodos((prevstate) => {
      return prevstate.filter(todo => todo.key != id);
    })
  }
  const adderhandler = (todoo) => {
      settodos(
        (todoss) => {
        return [
          {text : todoo , key : Math.random().toString()},
          ...todoss
        ]
      }
      )
  }
  const [todos, settodos] = useState(
    [
      {text : 'GET UP' ,key : '1'},
      {text : 'DRINK WATER' ,key : '2'},
      {text : 'HALF HOUR BHAGWAT GITA' ,key : '3'},
      {text : 'READ BOOK 1 hour' ,key : '4'},
      {text : 'EXERCISE 15 min' ,key : '5'},
    ]
  )
  return (
    <View style={styles.container}>
      <Header />
      <Adder adderhandler = {adderhandler}/>
      <View style={styles.content}>
      <View style={styles.list}>
     <FlatList
     data = {todos}
     renderItem = {({item}) =>(
       <Todo item ={item} handleTouch ={handleTouch}/>
     )}
     />
      
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list:{
    margin: 20,
  }
});
