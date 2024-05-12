import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Layouts from "../../components/Layout/Layouts";
import { userData } from "../../data/UserData";
import InputBox from "../../components/Forms/InputBox";

const Profile = ({ navigation }) => {
  //states

  const [email, setEmail] = useState(userData.email);
  const [profilePic, setProfilePic] = useState(userData.profilePic);
  const [password, setPassword] = useState(userData.password);
  const [name, setName] = useState(userData.name);
  const [address, setAddress] = useState(userData.address);
  const [city, setCity] = useState(userData.city);
  const [contact, setContact] = useState(userData.contact);

  //update profile

  const handleUpdate = () => {
    if (!email || !password || !name || !address || !city || !contact) {
      return alert("Please Provide All fields");
    }
    alert("Profile Update Successfully");

    navigation.navigate("account");
  };

  return (
    <Layouts>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: profilePic }} />
            <Pressable onPress={() => alert("profile dialogbox")}>
              <Text style={{ color: "red" }}>Update Your Profile Picture</Text>
            </Pressable>
          </View>

          <InputBox
            value={name}
            setValue={setName}
            placeholder={"Enter your Name"}
            autoComplete={"name"}
          />

          <InputBox
            value={email}
            setValue={setEmail}
            placeholder={"Enter your Email"}
            autoComplete={"email"}
          />

          <InputBox
            value={password}
            setValue={setPassword}
            placeholder={"Enter your Password"}
            autoComplete={"password"}
            secureTextEntry={true}
          />

          <InputBox
            value={address}
            setValue={setAddress}
            placeholder={"Enter your Address"}
            autoComplete={"address-line1"}
          />

          <InputBox
            value={city}
            setValue={setCity}
            placeholder={"Enter your City"}
            autoComplete={"country"}
          />

          <InputBox
            value={contact}
            setValue={setContact}
            placeholder={"Enter your Contact no"}
            autoComplete={"tel"}
          />

          <TouchableOpacity style={styles.btnUpdate} onPress={handleUpdate}>
            <Text style={styles.btnUpdateText}>Update Your Profile</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Layouts>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  image: {
    height: 70,
    width: "70%",
    resizeMode: "contain",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  btnUpdate: {
    backgroundColor: "blue",
    height: 40,
    borderRadius: 20,
    marginHorizontal: 30,
    justifyContent: "center",
    marginTop: 10,
  },
  btnUpdateText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});

export default Profile;
