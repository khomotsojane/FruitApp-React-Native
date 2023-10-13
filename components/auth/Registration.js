import React, { useState } from "react";
import { TextInput } from "react-native";
import { StyleSheet, Text } from "react-native";
import { View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Registration() {
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <Text
          style={{
            marginTop: 50,
            color: "white",
            fontWeight: "bold",
            fontSize: 30,
          }}
        >
          Register
        </Text>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 30 }}>
          Account
        </Text>
      </View>
      <View style={styles.logincard}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "#E8A392", margin: 20, fontWeight: "bold" }}>
            @
          </Text>
          <Text style={{ color: "#E8A392", margin: 20, fontWeight: "bold" }}>
            ECommerce App
          </Text>
        </View>

        <Text style={{ color: "grey", marginLeft: 20, fontSize: 10 }}>
          Use the text generator to create your own text! The Lorem Ipsum online
          text generator creates fictitious, fake, causal, or placeholder text.
        </Text>
        <View style={{ margin: 20 }}>
          <Text>Fullnames</Text>
          <TextInput style={{ borderWidth: 1, borderRadius: 10 }}></TextInput>
          <Text style={{ marginTop: 20 }}>Email</Text>
          <TextInput style={{ borderWidth: 1, borderRadius: 10 }}></TextInput>
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
            />
          </View>
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
              style={{ width: "50%" }}
            />
          </View>
          <TouchableOpacity>
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
              <Text style={{ color: "white" }}>Create account</Text>
            </View>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={{ color: "#E8A392" }}>Already have account?</Text>
            <Text style={{ color: "orange", fontWeight: "bold" }}>Login</Text>
          </View>
        </View>
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
    flex: 4,
    backgroundColor: "white",
    borderTopEndRadius: 20,
    borderTopLeftRadius: 16,
  },
});
