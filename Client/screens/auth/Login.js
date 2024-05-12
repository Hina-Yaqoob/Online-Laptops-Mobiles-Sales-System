import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import InputBox from "../../components/Forms/InputBox";
import { login } from "../../redux/features/auth/userAction";

//REDUX HOOKS
import { useDispatch, useSelector } from "react-redux";
import { useReduxStateHook } from "../../hooks/customeHook";
// import FORWARD_LOCALHOST_PORT from "./forwardPort";
const Login = ({ navigation }) => {
  const loginImage =
    "https://cdn.vectorstock.com/i/preview-1x/25/26/user-login-or-access-authentication-icon-vector-6712526.webp";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //HOOKS
  const dispatch = useDispatch();

  //GLABAL STATE

  const loading = useReduxStateHook(navigation, "home");

  // Login Function
  const handlelogin = () => {
    if (!email || !password) {
      return alert("Please Add Email or Password");
    }
    dispatch(login(email, password));
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: loginImage }} style={styles.image} />
      {loading && <Text>loading...</Text>}
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

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={handlelogin}>
          <Text style={styles.loginBtnText}>Login</Text>
        </TouchableOpacity>
        <Text>
          Not A User Yet ? Please{" "}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("register")}
          >
            Register !
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
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
export default Login;
