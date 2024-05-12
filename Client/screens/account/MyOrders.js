import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Layouts from "../../components/Layout/Layouts";
import { orderData } from "../../data/OrderData";
import OrderItem from "../../components/Forms/OrderItem";

const MyOrders = () => {
  return (
    <Layouts>
      <View style={styles.container}>
        <Text style={styles.heading}>My Orders</Text>
        <ScrollView>
          {orderData.map((order) => (
            <OrderItem key={order._id} order={order} />
          ))}
        </ScrollView>
      </View>
    </Layouts>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  heading: {
    textAlign: "center",
    color: "gray",
    fontWeight: "bold",
    fontSize: 20,
  },
});
export default MyOrders;
