import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// polyfills for MSW
import "fast-text-encoding";
import "react-native-url-polyfill/auto";
// end
import { server } from "./server";
import { useState } from "react";
import axios from "axios";
server.listen();

// https://jsonplaceholder.typicode.com/users/1
export default function App() {
  const [user, setUser] = useState(undefined);

  async function getUserWithFetch() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
        {
          headers: {
            accept: "application/json",
          },
        }
      );
      console.log("fetch response", response);
      if (response.ok) {
        const user = await response.json();
        setUser(user);
      }
    } catch (error) {}
  }
  async function getUserWithAxios() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1",
        {
          headers: {
            accept: "application/json",
          },
        }
      );
      console.log("axios response", response);

      if (response.status === 200) {
        setUser(response.data);
      }
    } catch (error) {}
  }

  return (
    <View style={styles.container}>
      <Button onPress={getUserWithFetch} title="Fetch User with Fetch" />
      <Button onPress={getUserWithAxios} title="Fetch User with Axios" />

      {user && <Text>{JSON.stringify(user, null, 2)}</Text>}
      <StatusBar style="auto" />
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
