{/*
* File: header.js
* Author: Erős István
* Copyright: 2023, Erős István
* Group: Szoft II N
* Date: 2023-03-06
* Github: https://github.com/erosjanos/
* Licenc: GNU GPL
*/}

import { StyleSheet, Text, View } from "react-native";

export default function Header() {
    return(
        <View style={styles.container}>
            <Text>Feladat 0358</Text>
            <Text>Paralelepipedon térfogata</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: 'gold',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });