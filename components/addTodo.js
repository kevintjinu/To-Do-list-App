import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity,TextInput,} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function AddTodo({submitHandler}){
    const [text,setText]= useState('');

    const changeHandler=(val)=>{
setText(val);
    }

    return (
        <View>
            <View style={styles.boom}>

            
            <TextInput 
            style={styles.input}
            placeholder='New Todo....'
            onChangeText={changeHandler}
            
            />
             <TouchableOpacity
             style={styles.add}
             onPress={()=> submitHandler(text)} >
        <Icon name="add" size={40} color="#20E3BC" />
        </TouchableOpacity>
            </View>

           
           
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
        fontSize:20,
        
    },
    boom:{
        
        backgroundColor:'white',
        borderRadius:15
    },
    add:{
        alignItems:'center'
        
        
    }
    
})