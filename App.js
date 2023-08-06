import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './screens/SearchScreen';
import ResultsShowScreen from './screens/ResultsShowScreen';
import React, { useState, useEffect } from 'react';


  
const Stack = createNativeStackNavigator();
export default function App() {
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);

  useEffect(() => {
    // 5 saniye sonra hoşgeldin ekranını kapat
    const timer = setTimeout(() => {
      setShowWelcomeScreen(false);
    }, 2000);

    // Komponent çözüldüğünde zamanlayıcıyı temizle
    return () => clearTimeout(timer);
  }, []);

  if (showWelcomeScreen) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hoşgeldiniz </Text>
      </View>
    );
  }
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerTitle: "RestaurantApp"}} >
      <Stack.Screen name="RestaurantApp" component={SearchScreen} />
      <Stack.Screen name="ResultsShow" component={ResultsShowScreen} />
    </Stack.Navigator>
    
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 48,
    fontWeight: 'bold',
    color:'blue'
  }
});
