// import { View, Text } from "react-native";
// import React from "react";

// const Tablet = () => {
//   return (
//     <View>
//       <Text>Tablet</Text>
//     </View>
//   );
// };

// export default Tablet;
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
  ProductsData25,
  ProductsData26,
  ProductsData27,
  ProductsData28,
  ProductsData29,
  ProductsData30,
  ProductsData31,
  ProductsData32,
} from "../data/ProductsData";
import React from "react";

const Mobile = () => {
  return (
    <View>
      <ScrollView>
        <View style={styles.main}>
          {ProductsData25.map((p) => (
            <ProductsCard key={p._id} p={p} />
          ))}

          {ProductsData26.map((p) => (
            <ProductsCard key={p._id} p={p} />
          ))}
        </View>

        <View style={styles.container}>
          {ProductsData27.map((p) => (
            <ProductsCard key={p._id} p={p} />
          ))}

          {ProductsData28.map((p) => (
            <ProductsCard key={p._id} p={p} />
          ))}
        </View>

        <View style={styles.container}>
          {ProductsData29.map((p) => (
            <ProductsCard key={p._id} p={p} />
          ))}

          {ProductsData30.map((p) => (
            <ProductsCard key={p._id} p={p} />
          ))}
        </View>

        <View style={styles.container}>
          {ProductsData31.map((p) => (
            <ProductsCard key={p._id} p={p} />
          ))}

          {ProductsData32.map((p) => (
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
