import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  useColorScheme,
  StyleSheet,
} from "react-native";

const AppPro = (): JSX.Element => {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <View style={styles.container}>
      <Text>Hellow world !!!!!!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
export default AppPro;
