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

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `${FORWARD_LOCALHOST_PORT}/product/get-all`,

        // "https://unusual-fly-loafers.cyclic.app/api/v1/product/get-all",

        // "http://120.0.0.2:8084/api/v1/product/get-all",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // Assuming the API response returns an array of products
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await axios.delete(
        `${FORWARD_LOCALHOST_PORT}/product/delete/${id}`,

        {
          headers: {
            "Content-Type": "application/json",
          },
          // console.log("response")
        }
      );

      if (response.status === 200) {
        await fetchProducts();
      }
    } catch (error) {
      console.error("Error deleting product by id:", error);
    }
  };

  const navigateToAddProduct = () => {
    navigation.navigate("Add Product");
  };

  const renderProductCard = ({ item }) => {
    return (
      <View style={styles.card}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
          }}
        >
          <Image source={{ uri: item?.images[0]?.url }} style={styles.image} />
          <View style={styles.cardDetails}>
            <Text style={styles.name}>{item?.name}</Text>
            <Text>{item?.description}</Text>
            <Text>Price: ${item?.price}</Text>
            <Text>Stock: {item?.stock}</Text>
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
          <Text style={{ color: "white" }}>Delete Product</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>Get Product</Text> */}
      <FlatList
        data={products}
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
    borderColor: "lightgray",
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
    borderWidth: 4,
    // borderColor: "#dddddd",
    borderColor: "dimgray",
    padding: 12,
    marginBottom: 12,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
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

export default AllProducts;
