import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import {
  ProductsData1,
  ProductsData2,
  ProductsData3,
  ProductsData4,
  ProductsData5,
  ProductsData6,
  ProductsData7,
  ProductsData8,
  ProductsData9,
  ProductsData10,
  ProductsData11,
  ProductsData12,
  ProductsData13,
  ProductsData14,
  ProductsData15,
  ProductsData16,
  ProductsData17,
  ProductsData18,
  ProductsData19,
  ProductsData20,
  ProductsData21,
  ProductsData22,
  ProductsData23,
  ProductsData24,
  ProductsData25,
  ProductsData26,
  ProductsData27,
  ProductsData28,
  ProductsData29,
  ProductsData30,
  ProductsData31,
  ProductsData32,
  ProductsData33,
  ProductsData34,
  ProductsData35,
  ProductsData36,
  ProductsData37,
  ProductsData38,
  ProductsData39,
  ProductsData40,
} from "../data/ProductsData";
import Layouts from "../components/Layout/Layouts";

const ProductDetails = ({ route }) => {
  const [pDetails, setPDetails] = useState({});
  const [qty, setQty] = useState(1);

  const productsD = [
    ...ProductsData1,
    ...ProductsData2,
    ...ProductsData3,
    ...ProductsData4,
    ...ProductsData5,
    ...ProductsData6,
    ...ProductsData7,
    ...ProductsData8,
    ...ProductsData9,
    ...ProductsData10,
    ...ProductsData11,
    ...ProductsData12,
    ...ProductsData13,
    ...ProductsData14,
    ...ProductsData15,
    ...ProductsData16,
    ...ProductsData17,
    ...ProductsData18,
    ...ProductsData19,
    ...ProductsData20,
    ...ProductsData21,
    ...ProductsData22,
    ...ProductsData23,
    ...ProductsData24,
    ...ProductsData25,
    ...ProductsData26,
    ...ProductsData27,
    ...ProductsData28,
    ...ProductsData29,
    ...ProductsData30,
    ...ProductsData31,
    ...ProductsData32,
    ...ProductsData33,
    ...ProductsData34,
    ...ProductsData35,
    ...ProductsData36,
    ...ProductsData37,
    ...ProductsData38,
    ...ProductsData39,
    ...ProductsData40,
  ];

  //Get Product pDetails here
  useEffect(() => {
    //Find Product Details
    const getProduct = productsD.find((p) => {
      return p?._id === params?._id;
    });
    setPDetails(getProduct);
  }, [params?._id]);

  //console.log(return);

  //handle Function for + & -

  const handleAddQty = () => {
    if (qty === 10) return alert("You can't Add more than 10 quantity");
    setQty((prev) => prev + 1);
  };

  const handleRemoveQty = () => {
    if (qty <= 1) return;
    setQty((prev) => prev - 1);
  };

  const { params } = route;
  return (
    <Layouts>
      <Image source={{ uri: pDetails?.imageUrl }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{pDetails?.name}</Text>
        <Text style={styles.title}>Price : {pDetails?.price}Rs </Text>
        <Text style={styles.desc}>Details: {pDetails?.description} </Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btnCart}
            onPress={() => alert(`${qty} Items Added To Cart`)}
            // onPress={() => }
            // disabled={pDetails?.quantity <= 0}
          >
            <Text style={styles.btnCartText}>
              {pDetails?.quantity > 0 ? "ADD TO CART" : "OUT OF STOCK"}
            </Text>
          </TouchableOpacity>

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
      </View>

      {/* <Image source={{ uri: pDetails?.imageUrl }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{pDetails?.name}</Text>
        <Text style={styles.title}>Price : {pDetails?.price} $ </Text>
        <Text style={styles.desc}>Price : {pDetails?.description} </Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btnCart}
            onPress={() => alert(`${qty} Items Added To Cart`)}
            // disabled={pDetails?.quantity <= 0}
          >
            <Text style={styles.btnCartText}>
              {pDetails?.quantity > 0 ? "ADD TO CART" : "OUT OF STOCK"}
            </Text>
          </TouchableOpacity>

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
      </View> */}
    </Layouts>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 250,
    width: "55%",
    alignSelf: "center",
  },
  container: {
    marginVertical: 5,
    marginTop: 13,
    marginHorizontal: 10,
    borderRadius: 15,
    backgroundColor: "silver",
    paddingLeft: 5,
    paddingRight: 5,
    // flexDirection: "column",
    // // flexDirection: "row",
  },

  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  desc: {
    fontSize: 12,
    textTransform: "capitalize",
    textAlign: "justify",
    marginVertical: 10,
    // fontWeight: "bold",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 12,
    marginHorizontal: 10,
  },
  btnCart: {
    width: 160,
    backgroundColor: "blue",
    borderRadius: 8,
    height: 40,
    justifyContent: "center",
    // marginBottom: 15,
  },
  btnCartText: {
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },

  btnQty: {
    backgroundColor: "green",
    width: 40,
    alignItems: "center",
    marginHorizontal: 10,
    borderRadius: 6,
    // marginBottom: 15,
  },
  btnQtyText: {
    fontSize: 20,
  },
});
export default ProductDetails;
