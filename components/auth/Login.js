import React, { useState } from "react";
import { TextInput } from "react-native";
import { StyleSheet, Text } from "react-native";
import { View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { firebase_auth } from "./FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { KeyboardAvoidingView } from "react-native";

export default function Login(props) {
  const navigation = props.navigation;
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = firebase_auth;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert("Logged in successfully");
      navigation.navigate('List')
    } catch (error) {
      console.log("error");
      alert("Sign in failed:" + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <Text
          style={{
            marginTop: 150,
            color: "white",
            fontWeight: "bold",
            fontSize: 30,
          }}
        >
          Hello,
        </Text>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 30 }}>
          Wecome back!
        </Text>
      </View>
      <View style={styles.logincard}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "#E8A392", margin: 20, fontWeight: "bold" }}>
            Restaurent App
          </Text>
        </View>

        <Text style={{ color: "grey", marginLeft: 20, fontSize: 10 }}>
          To encourage healthier eating habits and support businesses that
          prioritize fresh.
        </Text>
        <KeyboardAvoidingView behavior="padding">
          <View style={{ margin: 20 }}>
            <Text>Email</Text>
            <TextInput
              style={{ borderWidth: 1, borderRadius: 10 }}
              value={email}
              autoCapitalize="none"
              onChangeText={(text) => setEmail(text)}
            ></TextInput>
            <Text style={{ marginTop: 20 }}>Password</Text>

            <View
              style={{
                flexDirection: "row",
                width: "100%",
                borderWidth: 1,
                borderRadius: 10,
              }}
            >
              <MaterialCommunityIcons
                style={{ marginLeft: 5 }}
                name={isPasswordSecure ? "eye-off" : "eye"}
                size={28}
                onPress={() =>
                  isPasswordSecure
                    ? setIsPasswordSecure(false)
                    : setIsPasswordSecure(true)
                }
              />
              <TextInput
                secureTextEntry={isPasswordSecure}
                style={{ width: "100%" }}
                value={password}
                autoCapitalize="none"
                onChangeText={(text) => setPassword(text)}
              />
            </View>
            <Text
              style={{
                textAlign: "right",
                color: "#E8A392",
                fontWeight: "bold",
              }}
            >
              Forgot Password?
            </Text>
            <TouchableOpacity onPress={signIn} >
              <View
                style={{
                  marginTop: 80,
                  backgroundColor: "#E8A392",
                  height: 40,
                  color: "#E8A392",
                  borderWidth: 1,
                  borderColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  borderRadius: 16,
                }}
              >
                <Text style={{ color: "white" }}>Login</Text>
              </View>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Text style={{ color: "#E8A392" }}>Don't you have account?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("Registration")}
              >
                <Text style={{ color: "orange", fontWeight: "bold" }}>
                  Create Account
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8A392",
  },
  welcome: {
    flex: 1,
    backgroundColor: "",
    marginTop: 30,
  },
  logincard: {
    flex: 2,
    backgroundColor: "white",
    borderTopEndRadius: 20,
    borderTopLeftRadius: 16,
  },
});
