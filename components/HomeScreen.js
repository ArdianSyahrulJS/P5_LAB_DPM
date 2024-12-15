import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Card, Text } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Card style={styles.card} elevation={5}>
        <Card.Title title="Selamat Datang!" titleStyle={styles.cardTitle} />
        <Card.Content>
          <Text style={styles.cardContent}>silahkan Pencet ke halaman detail untuk gambarnya </Text>
        </Card.Content>
        <Card.Actions style={styles.cardActions}>
          <Button
            mode="contained"
            onPress={() => navigation.navigate("Details")}
            labelStyle={styles.buttonText}
            style={styles.button}
          >
            Ke Halaman Detail
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0f7fa", // Warna latar belakang lebih segar
    padding: 20,
  },
  card: {
    width: "90%",
    borderRadius: 15,
    backgroundColor: "#ffffff",
    overflow: "hidden",
  },
  cardTitle: {
    color: "#00796b",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  cardContent: {
    color: "#004d40",
    fontSize: 16,
    textAlign: "center",
  },
  cardActions: {
    justifyContent: "center",
    paddingBottom: 10,
  },
  button: {
    borderRadius: 10,
    backgroundColor: "#00796b",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});
