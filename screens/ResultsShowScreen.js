import { StyleSheet, Text, View ,Image, FlatList, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import data from '../api/data';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';

export default function ResultsShowScreen({route}) {

  const [result, setResult] = useState(null);
  const id = route.params.id;
  const getResults = async (id) =>{
    const response = await data.get(`/${id}`);
    setResult(response.data);
  }

  useEffect(() =>{
    getResults(id);
  }, []);
   if (!result) {
    return null;
  }
  return (
    <ScrollView>
    <View>
      <Text style={styles.name} > 
        {result.name}
      </Text>
     <Text style={styles.phone}>{result.phone}</Text>
      <Text style={styles.location}>{result.location.address1}</Text>
      <Text style={styles.city}>{result.location.city}</Text>
     {
        result.is_closed ? 
        <AntDesign style={styles.close} name="closecircle" size={30} color="red" /> : 
        <MaterialIcons style={styles.close} name="delivery-dining" size={30} color="green" />
     }

     <FlatList data={result.photos} keyExtractor={(photo) => photo} renderItem={({item}) =>{
        return <Image style={styles.image} source={{uri:item}}/>
      }
      }/> 
    </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  image:{
    height:180,
   
    borderRadius:20,
    margin:10,


  },
  name:{
    fontSize:20,
    fontWeight:'bold',
    margin:5,
    alignSelf:'center',
    marginVertical:10,
  },
  phone:{
    margin:5,
    alignSelf:'center',
  },
  location:{
    margin:5,
    alignSelf:'center',

  },
  city:{
    margin:5,
    alignSelf:'center',
  },
  close:{
    alignSelf:'center',
    margin:5,
  }



})