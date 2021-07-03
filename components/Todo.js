import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
export default function Todo({item,handleTouch})
{
    return(
        <View>
        <TouchableOpacity onPress ={()=> handleTouch(item.key)}>
        <View  style={styles.item}>
            <MaterialIcons name="delete" size={24} color="black" />
            <Text style={styles.texter}>{item.text}</Text>
        </View>
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
        flexDirection : 'row',
    },
    texter : {
        marginLeft : 20,
        paddingRight :15
    }
})