import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import axios from "axios";
// import { server } from "../../../redux/store";
import { server } from "../../../redux/store";
import * as ImagePicker from "expo-image-picker";

import FORWARD_LOCALHOST_PORT from "../../auth/forwardPort";

const AddCategory = () => {
  const [category, setCategory] = useState("");

  //   const handleImagePicker = async () => {
  //     let result = await ImagePicker.launchImageLibraryAsync({
  //       mediaTypes: ImagePicker.MediaTypeOptions.All,
  //       allowsEditing: true,
  //       aspect: [4, 3],
  //       quality: 1,
  //     });

  //     console.log(result);

  //     if (!result.canceled) {
  //       setProductImage(result.assets[0].uri);
  //     }
  //   };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("category", category);
    try {
      const response = await axios.post(
        // "https://a7b8-223-123-18-81.ngrok-free.app/cat/create",
        
        `${FORWARD_LOCALHOST_PORT}/cat/create`,
        { category },

        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("API Response:", response.data);

      // Reset states after successful submission
      setCategory("");
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Category</Text>
      <TextInput
        style={styles.input}
        placeholder="Category Name"
        value={category}
        onChangeText={setCategory}
      />

      <TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
        <Text style={styles.addButtonText}>Add Category</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    // backgroundColor: "#ffffff",
    borderColor: "lightgray",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "dimgray",
    borderWidth: 2,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  imagePicker: {
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 12,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  addButton: {
    backgroundColor: "blue",
    padding: 12,
    borderRadius: 25,
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

// const pickerSelectStyles = StyleSheet.create({
//   inputIOS: {
//     height: 40,
//     borderColor: "gray",
//     borderWidth: 1,
//     marginBottom: 12,
//     paddingHorizontal: 8,
//   },
//   inputAndroid: {
//     height: 40,
//     borderColor: "gray",
//     borderWidth: 1,
//     marginBottom: 12,
//     paddingHorizontal: 8,
//   },
// });

export default AddCategory;
