import { StyleSheet, Text, View } from "react-native";
import React from "react";

function FancyCard() {
  return (
    <View
      style={{
        marginTop: 30,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          margin: 10,
        }}
      >
        Flat card
      </Text>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text>RED</Text>
        </View>
        <View style={styles.box}>
          <Text>Blue</Text>
        </View>
        <View style={styles.box}>
          <Text>Green</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DAC0A3",
    flexDirection: "row",
    margin: 10,
  },
  box: {
    flex: 1,
    width: 100,
    height: 100,
    backgroundColor: "#F8F0E5",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },

  whiteText: {
    color: "#FFFFFF",
  },
  darkText: {
    color: "#000000",
  },
});

export default FancyCard;
