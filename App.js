{/*
* File: App.js
* Author: Erős István
* Copyright: 2023, Erős István
* Group: Szoft II N
* Date: 2023-03-06
* Github: https://github.com/erosjanos/
* Licenc: GNU GPL
*/}
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Body from './components/body';
import Footer from './components/footer';
import Header from './components/header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
