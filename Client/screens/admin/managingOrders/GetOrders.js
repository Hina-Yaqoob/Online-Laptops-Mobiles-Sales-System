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

// const AllOrders = () => {
//   const [orders, setOrders] = useState([]);
//   const navigation = useNavigation();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const headers = {
//           "Content-Type": "application/json",
//         };
//         const response = await axios.get(
//           "https://dull-jade-dibbler-tutu.cyclic.app/api/v1/order/admin/get-all-orders",
//           { headers }
//         );
//         console.log("response" + JSON.stringify(response));
//         setData(response.data.orders);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const navigateToAddOrders = () => {
//     navigation.navigate("Add Orders");
//   };

//   const renderOrdersCard = ({ item }) => {
//     return (
//       // <View style={styles.card}>
//       //   <TouchableOpacity
//       //     style={{
//       //       flexDirection: "row",
//       //     }}
//       //   >
//       // {
//       //   /* //           <Image source={{ uri: item?.images[0]?.url }} style={styles.image} /> */
//       // }
//       <View style={styles.cardDetails}>
//         <Text> address: {item?.shippingInfo[0]?.address}</Text>
//         <Text> city: {item?.shippingInfo[0]?.city}</Text>
//         <Text> country: {item?.shippingInfo[0]?.country}</Text>

//         <Text> name: {item?.orderItems[0].name}</Text>
//         <Text> price: {item?.orderItems[0].price}</Text>
//         <Text> quantity: {item?.orderItems[0].quantity}</Text>
//         <Text> image: {item?.orderItems[0].image}</Text>
//         <Text> product: {item?.orderItems[0].product}</Text>

//         <Text>paymentMethod: {item?.paymentMethod}</Text>
//         <Text>user: {item?.user}</Text>
//         <Text>paymentInfo: {item?.paymentInfo}</Text>
//         <Text>itemPrice: {item?.itemPrice}</Text>
//         <Text>tax: {item?.tax}</Text>
//         <Text>shippingCharges: {item?.shippingCharges}</Text>
//         <Text>totalAmount: {item?.totalAmount}</Text>
//         <Text>orderStatus: {item?.orderStatus}</Text>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Get Product</Text>
//       <FlatList
//         data={orders}
//         renderItem={renderProductCard}
//         keyExtractor={(item) => item.name}
//       />
//       <FAB style={styles.fab} icon="plus" onPress={navigateToAddOrders} />
//     </View>
//   );

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       padding: 16,
//       backgroundColor: "#ffffff",
//     },
//     header: {
//       fontSize: 24,
//       fontWeight: "bold",
//       marginBottom: 16,
//     },
//     card: {
//       flexDirection: "column",
//       alignItems: "flex-end",
//       borderRadius: 8,
//       borderWidth: 1,
//       borderColor: "#dddddd",
//       padding: 12,
//       marginBottom: 12,
//     },
//     image: {
//       width: 80,
//       height: 80,
//       borderRadius: 8,
//       marginRight: 12,
//     },
//     cardDetails: {
//       flex: 1,
//     },
//     name: {
//       fontSize: 18,
//       fontWeight: "bold",
//       marginBottom: 8,
//     },
//     fab: {
//       position: "absolute",
//       margin: 25,
//       right: 0,
//       bottom: 0,
//     },
//   });

//   export default AllOrders;

//   // import { View, Text } from "react-native";
//   // import React, { useEffect, useState } from "react";
//   // import axios from "axios";

//   // export default function GetOrders() {
//   //   const [data, setData] = useState([]);
//   //   useEffect(() => {
//   //     const fetchData = async () => {
//   //       try {
//   //         const headers = {
//   //           "Content-Type": "application/json",
//   //         };
//   //         const response = await axios.get(
//   //           "https://unusual-fly-loafers.cyclic.app/api/v1/order/admin/get-all-orders",
//   //           { headers }
//   //         );
//   //         console.log("response" + JSON.stringify(response));
//   //         setData(response.data.orders);
//   //       } catch (error) {
//   //         console.error("Error fetching data:", error);
//   //       }
//   //     };

//   //     fetchData();
//   //   }, []);
//   //   return (
//   //     <View>
//   //       <Text>GetOrders</Text>
//   //     </View>
//   //   );
// // };

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

// const AllOrders = () => {
//   const [orders, setOrders] = useState([]);
//   const navigation = useNavigation();

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const response = await axios.get(
//         "https://unusual-fly-loafers.cyclic.app/api/v1/order/admin/get-all-orders",
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       // Assuming the API response returns an array of products
//       setOrders(response.data.orders);
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//     }
//   };

//   const deleteOrders = async (id) => {};
//   // try {
//   //       const response = await axios.delete(
//   //         `https://unusual-fly-loafers.cyclic.app/api/v1/product/delete/${id}`,

//   //         {
//   //           headers: {
//   //             "Content-Type": "application/json",
//   //           },
//   //           // console.log("response")
//   //         }
//   //       );

//   //       if (response.status === 200) {
//   //         await fetchOrders();
//   //       }
//   //     } catch (error) {
//   //       console.error("Error deleting product by id:", error);
//   //     }
//   //   };

//   const navigateToAddOrders = () => {
//     navigation.navigate("Add Order");
//   };

//   const renderProductCard = ({ item }) => {
//     return (
//       <View style={styles.card}>
//         <TouchableOpacity
//           style={{
//             flexDirection: "row",
//           }}
//         >
//           {/* //           <Image source={{ uri: item?.images[0]?.url }} style={styles.image} /> */}
//           <View style={styles.cardDetails}>
//             <Text> address: {item?.shippingInfo[0].address}</Text>
//             <Text> city: {item?.shippingInfo[0].city}</Text>
//             <Text> country: {item?.shippingInfo[0].country}</Text>

//             <Text> name: {item?.orderItems[0].name}</Text>
//             <Text> price: {item?.orderItems[0].price}</Text>
//             <Text> quantity: {item?.orderItems[0].quantity}</Text>
//             <Text> image: {item?.orderItems[0].image}</Text>
//             <Text> product: {item?.orderItems[0].product}</Text>
//             <Text>paymentMethod: {item?.paymentMethod}</Text>
//             <Text>user: {item?.user}</Text>
//             <Text>paymentInfo: {item?.paymentInfo}</Text>
//             <Text>itemPrice: {item?.itemPrice}</Text>
//             <Text>tax: {item?.tax}</Text>
//             <Text>shippingCharges: {item?.shippingCharges}</Text>
//             <Text>totalAmount: {item?.totalAmount}</Text>
//             <Text>orderStatus: {item?.orderStatus}</Text>

//             {/* //             <Text>{item?.description}</Text>
//   //             <Text>Price: ${item?.price}</Text>
//   //             <Text>Stock: {item?.stock}</Text> */}
//             {/* //{" "} */}
//           </View>
//           {/* //{" "} */}
//         </TouchableOpacity>
//         {/* //{" "} */}
//         <TouchableOpacity
//           onPress={() => {
//             deleteProduct(item._id);
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
//         data={orders}
//         renderItem={renderProductCard}
//         keyExtractor={(item) => item.name}
//       />
//       <FAB style={styles.fab} icon="plus" onPress={navigateToAddOrders} />
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

// export default AllOrders;

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
// import FORWARD_LOCALHOST_PORT from "../../auth/forwardPort";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const navigation = useNavigation();
  console.log("ijufoisdhjfdshjflosdhjfolsdhf", orders);
  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        // "https://unusual-fly-loafers.cyclic.app/api/v1/order/admin/get-all-orders",

        "https://dull-jade-dibbler-tutu.cyclic.app/api/v1/order/admin/get-all-orders",

        // `${FORWARD_LOCALHOST_PORT}/admin/my-orders`,

        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // Assuming the API response returns an array of products
      setOrders(response.data.orders);
      console.log("asjhsdgfdjshgfdjsgfdkjshgfdjsf", response.data.orders);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const deleteOrders = async (id) => {};
  // try {
  //       const response = await axios.delete(
  //         `https://unusual-fly-loafers.cyclic.app/api/v1/product/delete/${id}`,

  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           // console.log("response")
  //         }
  //       );

  //       if (response.status === 200) {
  //         await fetchOrders();
  //       }
  //     } catch (error) {
  //       console.error("Error deleting product by id:", error);
  //     }
  //   };

  const navigateToAddOrders = () => {
    navigation.navigate("Add Orders");
  };

  const renderProductCard = () => {
    return (
      <View style={styles.card}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
          }}
        >
          {/* //           <Image source={{ uri: item?.images[0]?.url }} style={styles.image} /> */}
          <View style={styles.cardDetails}>
            {console.log("orders", orders)}
            {orders &&
              orders.length > 0 &&
              orders.map((order) => (
                <View key={order._id}>
                  {/* Shipping Info */}
                  <Text>Address : {order.shippingInfo.address}</Text>
                  <Text>City: {order.shippingInfo.city}</Text>
                  <Text>Country: {order.shippingInfo.country}</Text>

                  {/* Order Items (assuming there's only one item in the array) */}
                  <Text>Name: {order.orderItems[0].name}</Text>
                  <Text>Price: {order.orderItems[0].price}</Text>
                  <Text>Quantity: {order.orderItems[0].quantity}</Text>
                  <Text>Image: {order?.orderItems[0].image}</Text>
                  <Text>Product: {order.orderItems[0].product}</Text>

                  {/* Order Details */}
                  <Text>Payment Method: {order.paymentMethod}</Text>
                  <Text>User: {order.user}</Text>
                  <Text>Item Price: {order.itemPrice}</Text>
                  <Text>Tax: {order.tax}</Text>
                  <Text>Shipping Charges: {order.shippingCharges}</Text>
                  <Text>Total Amount: {order.totalAmount}</Text>
                  <Text>Order Status: {order.orderStatus}</Text>
                </View>
              ))}
            {/* //             <Text>{item?.description}</Text>
  //             <Text>Price: ${item?.price}</Text>
  //             <Text>Stock: {item?.stock}</Text> */}
            {/* //{" "} */}
          </View>

          {/* //{" "} */}
        </TouchableOpacity>
        {/* //{" "} */}
        <TouchableOpacity
          onPress={() => {
            deleteProduct(item._id);
          }}
          style={{
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#dddddd",
            padding: 10,
            backgroundColor: "blue",
          }}
        >
          <Text style={{ color: "white" }}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>Get Product</Text> */}
      <FlatList
        data={orders}
        renderItem={renderProductCard}
        keyExtractor={(item) => item.name}
      />
      {/* <FAB style={styles.fab} icon="plus" onPress={navigateToAddOrders} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffffff",
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
    borderWidth: 1,
    borderColor: "#dddddd",
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
  },
});

export default AllOrders;
