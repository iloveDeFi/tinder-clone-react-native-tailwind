import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import tw from "tailwind-rn";
import * as Google from "expo-google-app-auth";
import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithCredential } from "@firebase/auth";

export default function App() {
  const [user, setUser] = useState(null);

  const signInWithGoogle = async () => {
    Google.logInAsync({
      androidClientId:
        "463366353489-rpj8e62kefof9oaam8lbs36mumdi79sq.apps.googleusercontent.com",
      iosClientId:
        "463366353489-kdml80k5movt2lrcj5ik9oai61ptdq95.apps.googleusercontent.com",
      scopes: ["profile", "email"],
      permissions: ["public_profile", "email", "gender", "location"],
    })
      .then(async (logInResult) => {
        if (logInResult.type === "success") {
          const { idToken, accessToken } = logInResult;
          const credential = GoogleAuthProvider.credential(
            idToken,
            accessToken
          );

          const user = await signInWithCredential(auth, credential);
          console.log(user.user);
          setUser(user);
          // Successful sign in is handled by auth.onAuthStateChanged
        }
        return Promise.reject(); // Or handle user cancelation separatedly
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const HandlePress = () => {
    if (user) {
    } else {
      signInWithGoogle();
    }
  };

  return (
    <View style={tw("p-10")}>
      {user ? <Text>You are logged in</Text> : <Text>You arent logged in</Text>}
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Toggle auth" onPress={HandlePress} />
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
