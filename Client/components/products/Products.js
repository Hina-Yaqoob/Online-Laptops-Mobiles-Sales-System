import { ImageBackground, View } from "react-native";
import React from "react";
import ProductsCard from "./ProductsCard";
import { ProductsData1 } from "../../data/ProductsData";

const Products = () => {
  return (
    <View style={{ width: "70%" }}>
      {ProductsData1.map((p) => (
        <ProductsCard key={p._id} p={p} />
      ))}
    </View>
  );
};

export default Products;
