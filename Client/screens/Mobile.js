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
  ProductsData1,
  ProductsData2,
  ProductsData3,
  ProductsData4,
  ProductsData5,
  ProductsData6,
  ProductsData7,
  ProductsData8,
} from "../data/ProductsData";
import React from "react";

const Mobile = () => {
  return (
    <View>
      <ScrollView>
        <View style={styles.main}>
          {ProductsData1.map((p) => (
            <ProductsCard key={p._id} p={p} />
          ))}

          {ProductsData2.map((p) => (
            <ProductsCard key={p._id} p={p} />
          ))}
        </View>

        <View style={styles.container}>
          {ProductsData3.map((p) => (
            <ProductsCard key={p._id} p={p} />
          ))}

          {ProductsData4.map((p) => (
            <ProductsCard key={p._id} p={p} />
          ))}
        </View>

        <View style={styles.container}>
          {ProductsData5.map((p) => (
            <ProductsCard key={p._id} p={p} />
          ))}

          {ProductsData6.map((p) => (
            <ProductsCard key={p._id} p={p} />
          ))}
        </View>

        <View style={styles.container}>
          {ProductsData7.map((p) => (
            <ProductsCard key={p._id} p={p} />
          ))}

          {ProductsData8.map((p) => (
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
