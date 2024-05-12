// import { View, Text } from "react-native";
// import React from "react";

// const Mobile = () => {
//   return (
//     <View>
//       <Text>Mobile</Text>
//     </View>
//   );
// };

// export default Mobile;

import { View, StyleSheet, ScrollView } from "react-native";
import { ImageBackground } from "react-native";
import ProductsCard from "../components/products/ProductsCard";
import {
  ProductsData33,
  ProductsData34,
  ProductsData35,
  ProductsData36,
  ProductsData37,
  ProductsData38,
  ProductsData39,
  ProductsData40,
} from "../data/ProductsData";
import React from "react";

const Mobile = () => {
  return (
    <View>
      <ScrollView>
        <View style={styles.main}>
          {ProductsData33.map((p) => (
            <ProductsCard key={p._id} p={p} />
          ))}

          {ProductsData34.map((p) => (
            <ProductsCard key={p._id} p={p} />
          ))}
        </View>

        <View style={styles.container}>
          {ProductsData35.map((p) => (
            <ProductsCard key={p._id} p={p} />
          ))}

          {ProductsData36.map((p) => (
            <ProductsCard key={p._id} p={p} />
          ))}
        </View>

        <View style={styles.container}>
          {ProductsData37.map((p) => (
            <ProductsCard key={p._id} p={p} />
          ))}

          {ProductsData38.map((p) => (
            <ProductsCard key={p._id} p={p} />
          ))}
        </View>

        <View style={styles.container}>
          {ProductsData39.map((p) => (
            <ProductsCard key={p._id} p={p} />
          ))}

          {ProductsData40.map((p) => (
            <ProductsCard key={p._id} p={p} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "row",
  },

  container: {
    display: "flex",
    flexDirection: "row",
  },
});
export default Mobile;
