import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

export default function SearchBar() {
  return (
    <View style={styles.background}>
  <Feather  style={styles.icon} name="search" size={30} color="black" />
    <TextInput  style={styles.input} placeholder="Search" autoFocus={true}
    autoCorrect={false}
    autoCapitalize='none'
    
    />
    </View>
  )
}

const styles = StyleSheet.create({

    background:{
        backgroundColor:'lightgrey',
        flexDirection:'row',
        margin:10,
        height:50,
        alignItems:'center',
        borderRadius:10,
    } ,
    input:{
      flex:1,
      fontSize:18,
    },
    icon:{
        marginHorizontal:15,
    }

})