import { StatusBar } from 'expo-status-bar';
import Adder from './components/Adder';
import React from 'react';
import Todo from './components/Todo';
import Header from './components/Header'
import { StyleSheet, Text, View,FlatList,Alert,TouchableWithoutFeedback,Keyboard } from 'react-native';
import { useState } from 'react';
export default function App() {

  const handleTouch = (id) =>{
    settodos((prevstate) => {
      return prevstate.filter(todo => todo.key != id);
    })
  }

  const adderhandler = (todoo) => {
      if(todoo.length > 3){
        settodos(
          (todoss) => {
          return [
            {text : todoo , key : Math.random().toString()},
            ...todoss
          ]
        }
        )
      }
      else{
        Alert.alert('Ohho','todoo less than 3 character', 
        [
          {  text : 'got it!!!'}
        ])
      }
   
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
    <TouchableWithoutFeedback onPress ={()=>{
      Keyboard.dismiss();
    }}>
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
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list:{
    flex: 1,
    margin: 20,
  }
});
