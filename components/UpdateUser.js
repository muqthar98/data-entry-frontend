import React,{useState} from 'react'
import {View,Text,StyleSheet,TextInput,Button} from 'react-native'

export default function UpdateUser(){

  const[name,setName] = useState('')
  const[phoneNumber,setPhoneNumber] = useState('')
  const[itemName,setItemName] = useState('')
  const[advanceAmount,setAdvanceAmount] = useState('')
  const[isPaid,setIsPaid] = useState('')

  return(
    <View style={styles.container}>
    <Text>UpdateScreen</Text>
    <TextInput style={styles.input} value={name} onChangeText={()=>setName(name)} placeholder="Name"/>
    <TextInput style={styles.input} value={phoneNumber} onChangeText={()=>setPhoneNumber(phoneNumber)} placeholder="Phone Number"/>
    <TextInput style={styles.input} value={itemName} onChangeText={()=>setItemName(itemName)} placeholder="Item Name"/>
    <TextInput style={styles.input} value={advanceAmount} onChangeText={()=>setAdvanceAmount(advanceAmount)} placeholder="Advance Amount"/>
    <TextInput style={styles.paidButton} value={isPaid} onChangeText={()=>setIsPaid(isPaid)} placeholder="Paid or Not Paid"/>
    <Button title="Update"></Button>
    </View>
  )
}

const styles = StyleSheet.create({
 container:{
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center'
  },
  input:{
    marginTop:20,
    padding:10
  },
  paidButton:{
    marginTop:20,
    padding:10,
    marginBottom:20
  }
})