import React from "react";
import { Button, Text, View } from "react-native";
import tw from "tailwind-rn";
import useAuth from "./hooks/useAuth";
import { StatusBar } from "expo-status-bar";

function Home() {
  const { user, loading, error, signInWithGoogle, logout } = useAuth();

  return (
    <View style={tw("p-10")}>
      {loading && <Text>LOADING</Text>}
      {user ? <Text>You are logged in</Text> : <Text>You arent logged in</Text>}
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title={user ? "Sign out" : "Sign in"}
        onPress={user ? logout : signInWithGoogle}
      />
      <StatusBar style="auto" />
    </View>
  );
}

export default Home;
