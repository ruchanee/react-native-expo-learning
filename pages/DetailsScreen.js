import { View, Text, Button } from "react-native";

export default function DetailsScreen ({ navigation }) {
  return (
    <View style={{ fllex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Go go Profile"
        onPress={() => navigation.navigate("Profile")} 
        />
        <Button
        title="Go go Home"
        onPress={() => navigation.navigate("Home")} 
        />
    </View>
  );
}
