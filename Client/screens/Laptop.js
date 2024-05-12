// import { View, Text } from "react-native";
// import React from "react";

// const Laptop = () => {
//   return (
//     <View>
//       <Text>Laptop</Text>
//     </View>
//   );
// };

// export default Laptop;

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
// import { ImageBackground } from "react-native";
import ProductsCard from "../components/products/ProductsCard";
import {
  ProductsData9,
  ProductsData10,
  ProductsData11,
  ProductsData12,
  ProductsData13,
  ProductsData14,
  ProductsData15,
  ProductsData16,
} from "../data/ProductsData";
import React from "react";

const Laptop = () => {
  return (
    <View>
      <ScrollView>
        <View style={styles.main}>
          {ProductsData9.map((p) => (
            <ProductsCard key={p._id} p={p} />
          ))}

          {ProductsData10.map((p) => (
            <ProductsCard key={p._id} p={p} />
          ))}
        </View>

        <View style={styles.container}>
          {ProductsData11.map((p) => (
            <ProductsCard key={p._id} p={p} />
          ))}

          {ProductsData12.map((p) => (
            <ProductsCard key={p._id} p={p} />
          ))}
        </View>

        <View style={styles.container}>
          {ProductsData13.map((p) => (
            <ProductsCard key={p._id} p={p} />
          ))}

          {ProductsData14.map((p) => (
            <ProductsCard key={p._id} p={p} />
          ))}
        </View>

        <View style={styles.container}>
          {ProductsData15.map((p) => (
            <ProductsCard key={p._id} p={p} />
          ))}

          {ProductsData16.map((p) => (
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
export default Laptop;
