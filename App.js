import React, {useState} from 'react';
import {StyleSheet,Text, View, TouchableWithoutFeedback,Keyboard,FlatList,Alert} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';



export default function App(){

  const [todos,setTodos] = useState([
    
  ]);
 
  const pressHandler =(key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler=(text)=>{
    if(text.length>5){
      setTodos((prevTodos)=>{
        return[
          {text:text,key:Math.random().toString()},
          ...prevTodos
        ];
      });
    }else {
      Alert.alert(
        'Try again', 'Characters too short must be above 5',[
          {
            text:'Will Do', 
          }
        ]
      );

    }
  }

  return(
    
    <TouchableWithoutFeedback onPress={()=>{
       Keyboard.dismiss();
      
    }} >
    <View style={styles.container}>
<Header/>

<View style={styles.content}>
  <AddTodo submitHandler={submitHandler} />
  <View style={styles.list}>
    <FlatList 
    data={todos}
    renderItem={({item})=>(
<TodoItem item={item} pressHandler={pressHandler} />
    )}
    
    />
  </View>
</View>

    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({ 
  container:{
      flex:1,
      backgroundColor:'#708DD1',
  } ,
  content: {
    flex:1,
    
    padding:40,
  },
  list:{
    flex:1,
marginTop:20,
backgroundColor:'#646EEA',
borderRadius:20,



  }
});