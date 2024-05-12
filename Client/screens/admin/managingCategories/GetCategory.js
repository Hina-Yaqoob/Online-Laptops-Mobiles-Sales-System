// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
// } from "react-native";
// import axios from "axios";
// import { FAB } from "react-native-paper";
// import { useNavigation } from "@react-navigation/native";

// const GetCategories = () => {
//   const [Allcategories, setAllCategories] = useState([]);
//   const navigation = useNavigation();

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const fetchCategories = async () => {
//     try {
//       const response = await axios.get(
//         "https://unusual-fly-loafers.cyclic.app/api/v1/cat/get-all",
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       // Assuming the API response returns an array of products
//       setAllCategories(response.data.Allcategories);

//       console.log("API Response:", response.data);
//     } catch (error) {
//       console.error("Error fetching categories:", error);
//     }
//   };

//   const deleteCategory = async (id) => {
//     try {
//       const response = await axios.delete(
//         `https://unusual-fly-loafers.cyclic.app/api/v1/cat/delete/${id}`,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (response.status === 200) {
//         await fetchCategories();
//       }
//     } catch (error) {
//       console.error("Error deleting category by id:", error);
//     }
//   };

//   const navigateToAddCategory = () => {
//     navigation.navigate("Add Category");
//   };

//   const renderProductCard = ({ item }) => {
//     return (
//       <View style={styles.card}>
//         <TouchableOpacity
//           style={{
//             flexDirection: "row",
//           }}
//         >
//           {/* <Image source={{ uri: item?.images[0]?.url }} style={styles.image} /> */}
//           <View style={styles.cardDetails}>
//             <Text style={styles.name}>{item?.category}</Text>

//             {/* <Text style={styles.name}>{item.categories}</Text> */}

//             {/* <Text>{item?.description}</Text> */}
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => {
//             deleteCategory(item._id);
//           }}
//           style={{
//             borderRadius: 8,
//             borderWidth: 1,
//             borderColor: "#dddddd",
//             padding: 10,
//           }}
//         >
//           <Text>Delete</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {/* <Text style={styles.header}>Get Product</Text> */}
//       <FlatList
//         data={Allcategories}
//         renderItem={renderProductCard}
//         keyExtractor={(item) => item.category}
//       />
//       <FAB style={styles.fab} icon="plus" onPress={navigateToAddCategory} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#ffffff",
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 16,
//   },
//   card: {
//     flexDirection: "column",
//     alignItems: "flex-end",
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: "#dddddd",
//     padding: 12,
//     marginBottom: 12,
//   },
//   image: {
//     width: 80,
//     height: 80,
//     borderRadius: 8,
//     marginRight: 12,
//   },
//   cardDetails: {
//     flex: 1,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 8,
//   },
//   fab: {
//     position: "absolute",
//     margin: 25,
//     right: 0,
//     bottom: 0,
//   },
// });

// export default GetCategories;

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import axios from "axios";
import { FAB } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import FORWARD_LOCALHOST_PORT from "../../auth/forwardPort";

const AllCategory = () => {
  const [category, setcategory] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchcategory();
  }, []);

  const fetchcategory = async () => {
    try {
      const response = await axios.get(
        // "https://unusual-fly-loafers.cyclic.app/api/v1/cat/get-all",

        `${FORWARD_LOCALHOST_PORT}/cat/get-all`,

        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // Assuming the API response returns an array of category
      setcategory(response.data.categories);
    } catch (error) {
      console.error("Error fetching category:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await axios.delete(
        `${FORWARD_LOCALHOST_PORT}/cat/delete/${id}`,

        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        await fetchcategory();
      }
    } catch (error) {
      console.error("Error deleting product by id:", error);
    }
  };

  const navigateToAddProduct = () => {
    navigation.navigate("Add Category");
  };

  const renderProductCard = ({ item }) => {
    return (
      <View style={styles.card}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
          }}
        >
          <View style={styles.cardDetails}>
            <Text>Category: {item?.category}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            deleteProduct(item._id);
          }}
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#dddddd",
            padding: 10,
            backgroundColor: "blue",
          }}
        >
          <Text style={{ color: "#ffffff" }}>Delete Category</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>Get Product</Text> */}
      <FlatList
        data={category}
        renderItem={renderProductCard}
        keyExtractor={(item) => item.name}
      />
      <FAB style={styles.fab} icon="plus" onPress={navigateToAddProduct} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    // backgroundColor: "#ffffff",
    backgroundColor: "lightgray",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  card: {
    flexDirection: "column",
    alignItems: "flex-end",
    borderRadius: 8,
    borderWidth: 2,
    // borderColor: "#dddddd",
    borderColor: "dimgray",
    padding: 12,
    marginBottom: 12,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  cardDetails: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  fab: {
    position: "absolute",
    margin: 25,
    right: 0,
    bottom: 0,
    backgroundColor: "gray",
  },
});

export default AllCategory;
