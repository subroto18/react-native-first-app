import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

function FancyImage() {
  return (
    <View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          margin: 10,
        }}
      >
        Fancy Image
      </Text>
      <View style={styles.card}>
        <Image
          style={styles.logo}
          source={{
            uri: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
          }}
        />
        <Text style={styles.cardTitle}>
          An image title represents the image's meaning, and purpose visually
          for the use
        </Text>

        <Text style={styles.cardDes}>
          {" "}
          description: a detailed explanation of an image that provides textual
          access to visual content; most often used for digital graphics online
          and in digital files; can be used as alt text in coding to provide
          access to more complete information
        </Text>
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
  tinyLogo: {
    height: 180,
  },
  logo: {
    height: 180,
    width: "100%",
  },
  card: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  cardDes: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default FancyImage;
