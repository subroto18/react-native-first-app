import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Table, Row, Rows } from "react-native-table-component";

function User() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    performApi();
  }, []);

  const performApi = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const json = await res.json();
      setLoading(false);
      setApiError(false);
      setData(json);
    } catch {
      setLoading(false);
      setApiError(true);
    }
  };

  const header = ["Name", "Email", "Info"];

  return (
    <View
      style={{
        padding: 8,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          margin: 10,
        }}
      >
        User Info
      </Text>
      <View>
        <View>
          {data.slice(0, 10).map((item) => {
            return (
              <View key={item.id} style={styles.card}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardDes}>{item.email}</Text>
              </View>
            );
          })}
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
  card: {
    margin: 8,
    backgroundColor: "#DEB2A9",
    padding: 5,
    borderRadius: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardDes: {},

  whiteText: {
    color: "#FFFFFF",
  },
  darkText: {
    color: "#000000",
  },
});

export default User;
