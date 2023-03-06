import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Body() {
    const [aedge, setAedge] = React.useState('');
    const [bedge, setBedge] = React.useState('');
    const [cedge, setCedge] = React.useState('');
    const [volume, setVolume] = React.useState('');
    function onCalcButton() {
        let volume = aedge * bedge * cedge;
        setVolume(volume);
    }
    return(
        <View style={styles.container}>
            <Text>A él</Text>
            <TextInput 
            onChangeText={(res) => {setAedge(res)}}
            style={styles.input}
            />
            <Text>B él</Text>
            <TextInput 
            onChangeText={(res) => {setBedge(res)}}
            style={styles.input}
            />
            <Text>C él</Text>
            <TextInput 
            onChangeText={(res) => {setCedge(res)}}
            style={styles.input}
            />

            <Button title="Számít"
            onPress={onCalcButton} />

            <Text>Térfogat</Text>
            <TextInput 
            onChangeText={(res) => {setVolume(res)}}
            style={styles.input}
            value={volume}
            />
            
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#fcf478',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
        backgroundColor: 'white',
        width: '80%',
        height: 30,
        marginBottom: 6,
        borderRadius: 5,
    }
  });