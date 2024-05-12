// import { View, Text } from "react-native";
// import React from "react";

// const Desktop = () => {
//   return (
//     <View>
//       <Text>Desktop</Text>
//     </View>
//   );
// };

// export default Desktop;

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
  ProductsData17,
  ProductsData18,
  ProductsData19,
  ProductsData20,
  ProductsData21,
  ProductsData22,
  ProductsData23,
  ProductsData24,
} from "../data/ProductsData";
import React from "react";

const Mobile = () => {
  return (
    <View>
      <ScrollView>
        <View style={styles.main}>
          {ProductsData17.map((p) => (
            <ProductsCard key={p._id} p={p} />
          ))}

          {ProductsData18.map((p) => (
            <ProductsCard key={p._id} p={p} />
          ))}
        </View>

        <View style={styles.container}>
          {ProductsData19.map((p) => (
            <ProductsCard key={p._id} p={p} />
          ))}

          {ProductsData20.map((p) => (
            <ProductsCard key={p._id} p={p} />
          ))}
        </View>

        <View style={styles.container}>
          {ProductsData21.map((p) => (
            <ProductsCard key={p._id} p={p} />
          ))}

          {ProductsData22.map((p) => (
            <ProductsCard key={p._id} p={p} />
          ))}
        </View>

        <View style={styles.container}>
          {ProductsData23.map((p) => (
            <ProductsCard key={p._id} p={p} />
          ))}

          {ProductsData24.map((p) => (
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
