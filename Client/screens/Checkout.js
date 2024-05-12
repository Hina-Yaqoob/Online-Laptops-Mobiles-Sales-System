import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Layouts from "../components/Layout/Layouts";

const Checkout = ({ navigation }) => {
  const handleCOD = () => {
    alert("Your Order has been Placed Successfully");
  };
  const handleOnline = () => {
    alert("You Are Redirecting to payment gateway ");

    navigation.navigate("payment");
  };

  return (
    <Layouts>
      <View style={styles.container}>
        <Text style={styles.heading}>Payment Options</Text>
        <Text style={styles.price}>Total Amount: 50000Rs </Text>
        <View style={styles.paymentCard}>
          <Text style={styles.paymentHeading}> Payment Mode </Text>

          <TouchableOpacity style={styles.paymentBtn} onPress={handleCOD}>
            <Text style={styles.paymentBtnText}>Cash On Delivery</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.paymentBtn} onPress={handleOnline}>
            <Text style={styles.paymentBtnText}>
              {" "}
              Online ( CREDIT | DEBIT )
            </Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </Layouts>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "90%",
  },
  heading: {
    fontSize: 30,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    marginBottom: 10,
    color: "gray",
  },
  paymentCard: {
    backgroundColor: "#ffffff",
    width: "90%",
    borderRadius: 10,
    padding: 30,
    marginVertical: 10,
  },
  paymentHeading: {
    color: "gray",
    marginBottom: 10,
    fontStyle: "italic",
    fontWeight: "900",

    // fontFamily: "bold",
  },
  paymentBtn: {
    backgroundColor: "#000000",
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    marginVertical: 10,
  },
  paymentBtnText: {
    color: "yellow",
    textAlign: "center",
  },
});

export default Checkout;
