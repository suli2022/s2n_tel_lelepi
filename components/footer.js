{/*
* File: footer.js
* Author: Erős István
* Copyright: 2023, Erős István
* Group: Szoft II N
* Date: 2023-03-06
* Github: https://github.com/erosjanos/
* Licenc: GNU GPL
*/}

import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
    return(
        <View style={styles.container}>
            <Text>Nagy János</Text>
            <Text>Szoft II N, 2023-03-06</Text>
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