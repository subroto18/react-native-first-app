import React from "react";
import {
  View,
  Text,
  useColorScheme,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import FlatCard from "./componenta/FlatCard";
import ElevatedCard from "./componenta/ElevatedCard";
import FancyCard from "./componenta/FlatCard";
import FancyImage from "./componenta/FancyImage";
import Blog from "./componenta/Blog";
import User from "./componenta/User";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElevatedCard />
        <FancyImage />
        <Blog />
        <User></User>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
