import React, {useState} from 'react';
import {StyleSheet,Text, View, TouchableOpacity,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function TodoItem({item,pressHandler}){

return(
    <View >
        <View style={styles.item}>
        <TouchableOpacity onPress={()=> pressHandler(item.key)} >
        <Icon name="delete" size={30} color="#1438AC" />
        </TouchableOpacity>
        <Text style={styles.text}>{item.text}</Text>  
        </View>
       </View>
    
)

}

const styles = StyleSheet.create({
    item:{
        flexDirection: 'row',
        padding:16,
        margin:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle: 'dashed',
        borderRadius:10,
        alignItems: 'center',
        backgroundColor:'white',
        borderColor:'black'
    },
    text:{
        marginLeft: 10,
        color:"black",
            
       
        
    }
})