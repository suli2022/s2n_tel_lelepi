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