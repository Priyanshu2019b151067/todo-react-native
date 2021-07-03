import React,{useState} from 'react';
import { StyleSheet, Text, View,FlatLis,TextInput,Button } from 'react-native';
export default function Adder({adderhandler})
{
    const changehandler = (val) =>{
        settodoo(val);
    }
    const [todoo, settodoo] = useState('')
    return(
      <View>
      <TextInput
      style ={styles.input}
      placeholder ="add todo"
      onChangeText ={(val)=>changehandler(val)}
      />
      <View style={styles.button}>
        <Button title="Add Todo " color='coral' onPress={()=>adderhandler(todoo)}/>
      </View>
      </View>
    )
}

const styles = StyleSheet.create({
    'input' : {
        margin: 10,
        paddingHorizontal : 8,
        paddingVertical:6 ,
        borderBottomWidth:1,
        borderTopWidth: 1,
        borderTopColor : '#ddd',
        borderBottomColor :'#ddd',

    },
    'button' : {
        alignItems : 'center',
        justifyContent :'center',
    }
})