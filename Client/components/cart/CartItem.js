import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const CartItem = ({ item }) => {
  const [qty, setQty] = useState(1);

  //Handle functions for + & -
  const handleAddQty = () => {
    if (qty === 10) return alert("You can't Add more than 10 quantity");
    setQty((prev) => prev + 1);
  };

  const handleRemoveQty = () => {
    if (qty <= 1) return;
    setQty((prev) => prev - 1);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: item?.imageUrl }} style={styles.image} />
      <View>
        <Text style={styles.name}> {item?.name} </Text>
        <Text style={styles.name}> Price:- {item?.price} Rs</Text>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnQty} onPress={handleRemoveQty}>
          <Text style={styles.btnQtyText}> - </Text>
        </TouchableOpacity>
        <Text>{qty}</Text>
        <TouchableOpacity style={styles.btnQty} onPress={handleAddQty}>
          <Text style={styles.btnQtyText}> + </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginLeft: 3,
    marginRight: 3,
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: "silver",
    borderRadius: 10,
    // borderColor: "aqua",
    // borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  image: {
    marginLeft: 7,
    height: 40,
    width: 90,
    resizeMode: "contain",
  },
  name: {
    fontSize: 8,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 10,
  },

  btnQty: {
    backgroundColor: "dimgray",
    width: 20,
    height: 20,
    alignItems: "center",
    marginHorizontal: 15,
    marginVertical: 7,
    borderRadius: 3,
    // marginBottom: 15,
  },
  btnQtyText: {
    fontSize: 15,
  },
});
export default CartItem;
