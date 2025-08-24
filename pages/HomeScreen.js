import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>Home Screen</Text>
      <Button
       title="Go to Details"
       onPress={() => navigation.navigate("Details")}
       />
        <Button
        title="Go go Profile"
        onPress={() => navigation.navigate("Profile")} 
        />
         <Button
        title="Go go Count"
        onPress={() => navigation.navigate("Count")} 
        />
         <Button
        title="Go go Flex"
        onPress={() => navigation.navigate("Flex")} 
        />
         <Button
        title="Go go Layout"
        onPress={() => navigation.navigate("Layout")} 
        />
          <Button
        title="Go go Login"
        onPress={() => navigation.navigate("Login")} 
        />
    </View>
  );
}