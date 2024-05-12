import { View, StatusBar, StyleSheet } from "react-native";
import React from "react";
import Footer from "./Footer";

const Layouts = ({ children }) => {
  return (
    <>
      <StatusBar />

      <View>{children}</View>

      <View style={styles.footer}>
        <Footer />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  footer: {
    display: "flex",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    zIndex: 100,
    borderTopWidth: 2,
    borderColor: "green",
    position: "absolute",
    bottom: 0,
    padding: 10,
  },
});

export default Layouts;
