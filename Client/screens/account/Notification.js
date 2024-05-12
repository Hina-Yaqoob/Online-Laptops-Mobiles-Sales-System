import { View, Text } from "react-native";
import React from "react";
import Layouts from "../../components/Layout/Layouts";

const Notification = () => {
  return (
    <Layouts>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Text> Sorry ! No Notification</Text>
      </View>
    </Layouts>
  );
};

export default Notification;
