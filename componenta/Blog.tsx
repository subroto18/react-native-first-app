import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";

const Blog = () => {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View>
      <Text style={styles.headingText}>Portfolio</Text>
      <View style={styles.card}>
        <Image
          style={styles.logo}
          source={{
            uri: "https://media.licdn.com/dms/image/D4D03AQHGyVgP4bvooA/profile-displayphoto-shrink_800_800/0/1689611665233?e=2147483647&v=beta&t=SFu9NZlWVru4kaRrL7CbRNBDRH8z6S2hQHp3A2ThW0c",
          }}
        />
        <Text style={styles.cardTitle}>Subroto Chakraborty_</Text>

        <Text style={styles.cardDes} numberOfLines={4}>
          {" "}
          My name is Subroto Chakraborty and I am an experienced full stack web
          developer with over three years of professional experience. My
          expertise lies in using React & Next for front-end development and
          Laravel for back-end development. I have a passion for coding and love
          to work with new and emerging technologies. Currently, I am
          transitioning to the MERN stack, which consists of MongoDB, Express,
          React, and Node.js. I am excited about this transition and am eager to
          continue developing my skills in this area. Aside from coding, I also
          have a creative side and enjoy making video documentaries. I find it
          fulfilling to be able to capture and share real-world stories through
          visual media. Overall, my combined interests in coding and videography
          allow me to approach problem-solving with a unique perspective, and I
          look forward to contributing my skills to future projects.
        </Text>

        <TouchableOpacity
          onPress={() => openLink("https://www.subrotochakraborty.site/")}
        >
          <Text>Read More</Text>
        </TouchableOpacity>
      </View>
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
    backgroundColor: "#102C57",
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
  card: {
    padding: 10,
  },
  logo: {
    width: "100%",
    height: 280,
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
export default Blog;
