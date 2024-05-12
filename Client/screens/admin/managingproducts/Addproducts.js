// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   TextInput,
// } from "react-native";
// import React, { useState } from "react";
// // import InputBox from "../../components/Forms/InputBox";
// //******************************* */
// import axios from "axios";

// const AddProduct = ({ navigation }) => {
//   const [productName, setProductName] = useState("");
//   const [productDescription, setProductDescription] = useState("");
//   const [productPrice, setProductPrice] = useState("");
//   const [productStock, setProductStock] = useState("");
//   // const [productImage, setProductImage] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   // Register Function
//   const handleSubmit = () => {
//     if (
//       !productName ||
//       !productDescription ||
//       !productPrice ||
//       !productStock ||

//       // !productImage ||

//       !selectedCategory
//     ) {
//       return alert("Please Provide All fields");
//     }
//     alert("Product added Successfully");

//     navigation.navigate("Products");
//   };

//   return (
//     <View style={styles.container}>
//       {/* <Image source={{ uri: loginImage }} style={styles.image} /> */}

//       <TextInput
//         style={styles.input}
//         placeholder="Product Name"
//         value={productName}
//         onChangeText={setProductName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Description"
//         value={productDescription}
//         onChangeText={setProductDescription}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Price"
//         value={productPrice}
//         onChangeText={setProductPrice}
//         keyboardType="numeric"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Stock"
//         value={productStock}
//         onChangeText={setProductStock}
//         keyboardType="numeric"
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Category"
//         value={selectedCategory}
//         onChangeText={setSelectedCategory}
//       />

//       <TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
//         <Text style={styles.addButtonText}>Add Product</Text>
//       </TouchableOpacity>

//       {/* <View style={styles.btnContainer}>

//       </View> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     height: "100%",
//     justifyContent: "center",
//   },
//   image: {
//     height: 170,
//     width: "60%",
//     resizeMode: "contain",
//     borderRadius: 15,
//     marginBottom: 10,
//     alignSelf: "center",
//   },

//   btnContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   addButton: {
//     backgroundColor: "blue",
//     padding: 12,
//     borderRadius: 8,
//     alignItems: "center",
//   },
//   addButtonText: {
//     color: "white",
//     fontWeight: "bold",
//   },
//   input: {
//     height: 40,
//     borderColor: "gray",
//     borderWidth: 1,
//     marginBottom: 12,
//     paddingHorizontal: 8,
//   },

//   link: {
//     color: "red",
//   },
// });

// export default AddProduct;

// **************************************************************

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

import FORWARD_LOCALHOST_PORT from "../../auth/forwardPort";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productStock, setProductStock] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // if (!result.canceled) {
  //   setProductImage(result.assets[0].uri);
  // }

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("name", productName);
    formData.append("description", productDescription);
    formData.append("price", productPrice);
    formData.append("stock", productStock);
    formData.append("category", "655b4e935cc5e8f7af38c204");

    try {
      const response = await axios.post(
        //"https://dull-jade-dibbler-tutu.cyclic.app/api/v1/product/create",

        `${FORWARD_LOCALHOST_PORT}/product/create`,

        //"https://unusual-fly-loafers.cyclic.app/api/v1/product/create",

        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("formata", formData);
      console.log("API Response:", response.data);

      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request:", error.message);
      }

      // Reset states after successful submission
      setProductName("");
      setProductDescription("");
      setProductPrice("");
      setProductStock("");
      setProductImage(null);
      setSelectedCategory("");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Product</Text>
      {/* <TouchableOpacity style={styles.imagePicker} onPress={handleImagePicker}>
        {productImage ? (
          <Image source={{ uri: productImage }} style={styles.image} />
        ) : (
          <Text>Select Image</Text>
        )}
      </TouchableOpacity> */}
      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={productName}
        onChangeText={setProductName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={productDescription}
        onChangeText={setProductDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={productPrice}
        onChangeText={setProductPrice}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Stock"
        value={productStock}
        onChangeText={setProductStock}
        keyboardType="numeric"
      />

      {/* <TextInput
        style={styles.input}
        placeholder="Category"
        value={selectedCategory}
        onChangeText={setSelectedCategory}
      /> */}

      <TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
        <Text style={styles.addButtonText}>Add Product</Text>
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
    borderRadius: 22,
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  inputAndroid: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default AddProduct;
