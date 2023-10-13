import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Login from './components/auth/Login';
import Registration from './components/auth/Registration';
import List from './components/screens/List';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
          {/* <Login/>
          <Registration/>
           */}
          <List/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
