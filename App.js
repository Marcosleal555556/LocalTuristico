import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import TouristLocation from "./src/components/TouristLocation";

export default function App() {
  return (
    <View style={styles.container}>
      <TouristLocation name="Neo Química Arena" />
      <TouristLocation address="Av. Miguel Ignácio Curi, 111 - Vila Carmosina, São Paulo - SP, 08295-005" />
      <TouristLocation imageUri='./src/Imagens/NeoQuimica.jpeg'>My App</TouristLocation>
      <TouristLocation description="Descrição" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
