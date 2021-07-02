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
      <Button title="Add todo" color='coral' onPress={()=>adderhandler(todoo)}/>
      </View>
    )
}

const styles = StyleSheet.create({
    'input' : {
        marginBottom : 10,
        paddingHorizontal : 8,
        paddingVertical:6 ,
        borderBottomWidth:1,
        borderBottomColor :'#ddd',

    }
})