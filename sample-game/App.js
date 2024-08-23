import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://media.gq-magazine.co.uk/photos/5d13a88fa56e59087435810d/16:9/w_1600,c_limit/zelda-02-gq-21nov18_b.jpg",
        }}
        style={{ width: 300, height: 300 }}
      />
      <Text style={{ color: "white" }}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
