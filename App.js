// import { StatusBar } from 'expo-status-bar';
// import { ScrollView, StyleSheet, Text, View } from 'react-native';
// import Login from './components/auth/Login';
// import Registration from './components/auth/Registration';
// import List from './components/screens/List';

// export default function App() {
//   return (
//     <ScrollView>
//       <View style={styles.container}>
//           <Login/>
//           <Registration/>
//           <List/>

//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',

//   },
// });



import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './components/auth/Login'
import Registration from './components/auth/Registration'
import List from './components/screens/List'
import Orders from './components/screens/Orders'
import { FoodProvider } from "./Manager/foodmanager";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <FoodProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} options={{headerShown: false}} />
        <Stack.Screen name='Registration' component={Registration} options={{headerShown: false}} />
        <Stack.Screen name='List' component={List} options={{headerShown: false}} />
        <Stack.Screen name='Orders' component={Orders} />
      </Stack.Navigator>
    </NavigationContainer>
    </FoodProvider>
  )
}






















