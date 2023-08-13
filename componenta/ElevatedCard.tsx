import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useColorScheme,
} from "react-native";
import React from "react";

const ElevatedCard = () => {
  const colorMode = useColorScheme();
  return (
    <View>
      <Text style={[styles.headingText]}>Elevated Card</Text>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          <View style={styles.box}>
            <Text>Tab</Text>
          </View>
          <View style={styles.box}>
            <Text>Tab</Text>
          </View>
          <View style={styles.box}>
            <Text>Tab</Text>
          </View>
          <View style={styles.box}>
            <Text>Tab</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#F8F0E5",
    flexDirection: "row",
    margin: 10,
  },
  box: {
    flex: 1,
    width: 100,
    height: 100,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    color: "#FFFFFF",
  },

  whiteText: {
    color: "#FFFFFF",
  },
  darkText: {
    color: "#000000",
  },
});

export default ElevatedCard;
