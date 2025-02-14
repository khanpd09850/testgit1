import React from "react";
import { View, Text, Image, Button } from "react-native";
import { Card } from "react-native-elements";
const ProductDetailScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Image source={require("../assets/travel.png")} />
      </View>
      <View style={{ flex: 2 }}>
        <Card>
          <Text>Thông tin về khu du lịch...</Text>
        </Card>
      </View>
      <View style={{ flex: 1 }}>
        <Card>
          <Text>Giá tiền: $100</Text>
          <Button title="Đặt hàng" />
        </Card>
      </View>
    </View>
  );
};
export default ProductDetailScreen;