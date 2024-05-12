import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import InputBox from "../../components/Forms/InputBox";
//******************************* */
import axios from "axios";

const Register = ({ navigation }) => {
  const loginImage =
    "https://cdn.vectorstock.com/i/preview-1x/25/26/user-login-or-access-authentication-icon-vector-6712526.webp";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [contact, setContact] = useState("");

  // Register Function
  const handleRegister = () => {
    if (!email || !password || !name || !address || !city || !contact) {
      return alert("Please Provide All fields");
    }
    alert("Register Successfully");

    navigation.navigate("login");
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: loginImage }} style={styles.image} />

      <InputBox
        placeholder={"Enter Your Name"}
        value={name}
        setValue={setName}
        autoComplete={"name"}
      />

      <InputBox
        placeholder={"Enter Your Email"}
        value={email}
        setValue={setEmail}
        autoComplete={"email"}
      />

      <InputBox
        placeholder={"Enter Your Password"}
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />

      <InputBox
        placeholder={"Enter Your Address"}
        value={address}
        setValue={setAddress}
        autoComplete={"address-line1"}
      />

      <InputBox
        placeholder={"Enter Your City"}
        value={city}
        setValue={setCity}
        autoComplete={"country"}
      />

      <InputBox
        placeholder={"Enter Your Contact no"}
        value={contact}
        setValue={setContact}
        autoComplete={"tel"}
      />

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
          <Text style={styles.loginBtnText}>Register</Text>
        </TouchableOpacity>
        <Text>
          Already A User,Please ?{" "}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("register")}
          >
            Login!
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
  },
  image: {
    height: 170,
    width: "60%",
    resizeMode: "contain",
    borderRadius: 15,
    marginBottom: 10,
    alignSelf: "center",
  },
  loginBtn: {
    backgroundColor: "blue",
    width: "80%",
    justifyContent: "center",
    height: 40,
    borderRadius: 10,
    marginVertical: 20,
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  loginBtnText: {
    color: "#ffffff",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "500",
    fontSize: 18,
  },
  link: {
    color: "red",
  },
});

export default Register;

// **************************************************************
