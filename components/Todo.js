import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
export default function Todo({item,handleTouch})
{
    return(
        <View>
        <TouchableOpacity onPress ={()=> handleTouch(item.key)}>
        <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
        </View>
    );
}
const styles= StyleSheet.create({
    item : { 
        padding: 16,
        marginTop:16,
        backgroundColor : '#bbb',
        borderStyle :'dashed',
        borderRadius : 10,
    }
})