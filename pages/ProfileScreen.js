import { View, Text, Button } from "react-native";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>Ruchanee promto DBT102</Text>
      <Button
       title="Go to Home"
       onPress={() => navigation.navigate("Home")}
       />
       <Button
        title="Go go Details"
        onPress={() => navigation.navigate("Details")} 
        />
    </View>
  );
}