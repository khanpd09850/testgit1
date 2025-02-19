import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { Card } from "react-native-elements";

const ProductDetailScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={require("../assets/image.png")} 
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.infoContainer}>
        <Card containerStyle={styles.card}>
          <Text style={styles.infoText}>Điểm du lịch là các khu vực, địa phương hoặc địa điểm được lựa chọn và phát triển nhằm phục vụ nhu cầu tham quan, nghỉ dưỡng, vui chơi, khám phá của du khách. Những điểm du lịch này có thể là các khu vực thiên nhiên, các di tích lịch sử, công trình văn hóa hoặc các khu vui chơi giải trí.</Text>
        </Card>
      </View>
      <View style={styles.priceContainer}>
        <Card containerStyle={styles.card}>
          <Text style={styles.priceText}>Giá tiền: $100/ngày</Text>
          <Button title="Đặt ngay" onPress={() => alert('Đặt hàng thành công!')} />
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  infoContainer: {
    flex: 2,
    padding: 10,
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
  },
  priceContainer: {
    flex: 1,
    padding: 10,
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    borderRadius: 20, // Thêm borderRadius cho Card
    overflow: 'hidden', // Đảm bảo các thành phần bên trong không vượt ra ngoài
  },
});

export default ProductDetailScreen;
