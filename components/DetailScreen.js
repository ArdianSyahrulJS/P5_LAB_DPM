import React from "react";
import { View, StyleSheet, Image, FlatList, Dimensions } from "react-native";
import { Button, Text } from "react-native-paper";

const IMAGES = [
  { id: "1", uri: "https://trippers.id/wp-content/uploads/2021/03/Headline-new-york-800x445.jpg" },
  { id: "2", uri: "https://res.cloudinary.com/jnto/image/upload/w_1440,h_900,c_fill,f_auto,fl_lossy,q_auto/v1/media/filer_public/b4/df/b4df55a0-8e8a-446f-b93f-3ecbdba0b9af/image2_wvwrvh" },
  { id: "3", uri: "https://th.bing.com/th/id/OIP.q8ut-HOOTwbkLLMiOMFXVgHaEZ?rs=1&pid=ImgDetMain" },
  { id: "4", uri: "https://3.bp.blogspot.com/-dsNKhGd7ds0/UKBoBftt2XI/AAAAAAAAATc/835y2fJWfYU/s1600/IMG0232A.jpg" },
  { id: "5", uri: "https://th.bing.com/th/id/R.00f7e8f6b5eece5794bd84241efcb833?rik=hNAawffDwqs7XQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-Omkg3z_L1o0%2fUW6cEyWwXXI%2fAAAAAAAABYk%2fKCW7ZCZHAtI%2fs1600%2fkeindahan%2balam%2bpulau%2bbali%2c%2bindonesia.jpg&ehk=oABlm67vYLEwBd18Y7ykStLX8nG95pRutk7PXeMP42w%3d&risl=&pid=ImgRaw&r=0" },
  { id: "6", uri: "https://th.bing.com/th/id/R.2fda6deda3adc51c4655b8ac3cccc785?rik=vzPhn2ttCRVYjQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-zCbN4N1SAS4%2fUQi_me77tUI%2fAAAAAAAAKFo%2f74VKTuTZ77U%2fs1600%2f554079_428766880504691_1201592952_n.jpg&ehk=K7OEwwuySk9nHhrI5C13ADgFgbzBL5wUirEQGm80E%2fA%3d&risl=&pid=ImgRaw&r=0" },
];

const { width } = Dimensions.get("window"); // Mendapatkan lebar layar perangkat
const IMAGE_SIZE = width / 2 - 20; // Membagi lebar layar menjadi 2 kolom dengan jarak antar gambar

export default function DetailScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <Text variant="headlineLarge" style={styles.title}>
        Galeri Gambar
      </Text>
      <FlatList
        data={IMAGES}
        keyExtractor={(item) => item.id}
        numColumns={2} // Menampilkan grid dengan 2 kolom
        contentContainerStyle={styles.flatListContainer}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.uri }} style={styles.image} />
          </View>
        )}
      />
      <Button
        mode="contained"
        onPress={() => navigation.goBack()}
        labelStyle={styles.buttonText}
        style={styles.button}
      >
        Kembali ke Halaman Utama
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#e0f7fa", // Warna latar belakang yang sama seperti HomeScreen
    padding: 10,
    alignItems: "center",
  },
  title: {
    marginVertical: 10,
    color: "#00796b", // Warna hijau teal
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
  },
  flatListContainer: {
    justifyContent: "center",
  },
  imageContainer: {
    margin: 5,
  },
  image: {
    width: IMAGE_SIZE, // Lebar responsif
    height: IMAGE_SIZE, // Tinggi sama seperti lebar agar kotak sempurna
    borderRadius: 10,
  },
  button: {
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "#00796b",
    width: "90%",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
