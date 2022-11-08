import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, Image, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const restaurants = [
  {
    name: "Ichiban sushi đà nẵng",
    location: "206 Đ. Trần Phú, Phước Ninh, Hải Châu, Đà Nẵng 555700, Vietnam",
    phonenumber: "972096486",
    img: "https://lh5.googleusercontent.com/p/AF1QipO0287nJey0gNOOXY1gN0IMcYmblSocWZYnqis=w408-h268-k-no",
    stars: 3,
    latitude: 16.064979,
    longitude: 108.223180,
  },
  {
    name: "Quán Cô Hồng",
    location: "45-47 An Thượng 2, Bắc Mỹ An, Ngũ Hành Sơn, Đà Nẵng 550000, Vietnam",
    phonenumber: "934916911",
    img: "https://lh5.googleusercontent.com/p/AF1QipNdKBc6P5XcsE0zxGhh7kRUeMGaEgXe5vOV9IXU=w408-h544-k-no",
    stars: 4.5,
    latitude: 16.054957,
    longitude: 108.239359,
  },
  {
    name: "Bikini Bottom Express",
    location: "103 Nguyễn Văn Thoại, An Hải Đông, Sơn Trà, Đà Nẵng 550000, Vietnam",
    phonenumber: "905661186",
    img: "https://lh5.googleusercontent.com/p/AF1QipOe1oR8q_8nUkFYP4tJx6vbuRlQlobYx9-rFaPS=w425-h240-k-no",
    stars: 4,
    latitude: 16.049485,
    longitude: 108.247543,
  },
  {
    name: "Hang's Kitchen Restaurant",
    location: "90 Châu Thị Vĩnh Tế, Bắc Mỹ Phú, Ngũ Hành Sơn, Đà Nẵng 000052, Vietnam",
    phonenumber: "903551460",
    img: "https://lh5.googleusercontent.com/p/AF1QipN5dxsOB9uHKtn5ERXTRZhZCi5OwNz8ti1OBlXv=w408-h544-k-no",
    stars: 3.7,
    latitude: 16.051712,
    longitude: 108.240033,
  },
  {
    name: "Cơm Nhà Linh",
    location: "35 An Thượng 26, Bắc Mỹ Phú, Ngũ Hành Sơn, Đà Nẵng 550000, Việt Nam",
    phonenumber: "962068987",
    img: "https://lh5.googleusercontent.com/p/AF1QipPIp33X8oEtOdrxdCniJX8EExpwH3HCDKFnRSJn=w408-h272-k-no",
    stars: 4.3,
    latitude: 16.055678,
    longitude: 108.244909,
  },
  {
    name: "Đông Lâm Restaurant",
    location: "Bắc Mỹ Phú, Ngũ Hành Sơn, Đà Nẵng 550000, Việt Nam",
    phonenumber: "899878800",
    img: "https://lh5.googleusercontent.com/p/AF1QipPVf54iADskZK6afIPIfc3chJTYmndZiNruuAOT=w408-h510-k-no",
    stars: 4.6,
    latitude: 16.053356,
    longitude: 108.246708,
  },
  {
    name: "Nhà Hàng Bảo Khánh",
    location: "41 Đỗ Bá, Bắc Mỹ Phú, Ngũ Hành Sơn, Đà Nẵng 550000, Việt Nam",
    phonenumber: "931953079",
    img: "https://lh5.googleusercontent.com/p/AF1QipPzRMRRJEE59XuZ9HTVEOfnSfZiFgLNxNwrV4WH=w408-h544-k-no",
    stars: 5,
    latitude: 16.052546,
    longitude: 108.246314,
  },
  {
    name: "Nhà hàng Ngon Thị Hoa",
    location: "100 Lê Quang Đạo, Str, Ngũ Hành Sơn, Đà Nẵng 550000, Việt Nam",
    phonenumber: "967220100",
    img: "https://lh5.googleusercontent.com/p/AF1QipMOi_1erbfHs0y8TnV-pP1Vi38BC_HTFJLq0tyP=w408-h305-k-no",
    stars: 4.2,
    latitude: 16.049359,
    longitude: 108.245808,
  },
  {
    name: "Nhà hàng Tấn Tài",
    location: "12.10 Trần Bạch Đằng, Phước Mỹ, Ngũ Hành Sơn, Đà Nẵng 550000, Việt Nam",
    phonenumber: "967220100",
    img: "https://lh5.googleusercontent.com/p/AF1QipNPyiO3FrkY1Y8pIiiO2XmKUmqUdjuTfwREsXDh=w408-h408-k-no",
    stars: 5,
    latitude: 16.059066,
    longitude: 108.245204,
  },
  {
    name: "Nhà Hàng Hưng Phát",
    location: "233 Nguyễn Văn Thoại, Bắc Mỹ Phú, Sơn Trà, Đà Nẵng 550000, Việt Nam",
    phonenumber: "2363943339",
    img: "https://lh5.googleusercontent.com/p/AF1QipNSJbxBD-4Yb6C6HaeJkVlYI1W1ZoFgsft8xAQX=w408-h306-k-no",
    stars: 5,
    latitude: 16.057039,
    longitude: 108.245197,
  },
]



const Home = ({ navigation }) => {

  const listRestaurant = restaurants.map((restaurant) => {
    return (
      <TouchableOpacity style={{ backgroundColor: "#EEEEEE", borderRadius: 10, marginBottom: 20, }}
        onPress={() => {
          navigation.navigate('ProductDetail', { headerTitle: restaurant.name });
        }}
      >
        <View style={{ width: 350, }}>
          <Image source={{ uri: restaurant.img }} style={{ width: 350, height: 200, }} />
          <View style={{ padding: 20 }}>
            <Text style={{
              color: "black",
              fontSize: 20,
              fontWeight: "600",
              marginTop: 5,
            }}>{restaurant.name}</Text>
            <Text style={{
              color: "black",
              fontSize: 15,
              marginTop: 5,
            }}><Icon name="location-arrow" size={20} color="#1E90FF" />     {restaurant.location}</Text>
            <Text style={{
              color: "black",
              fontSize: 15,
              marginTop: 5,
            }}><Icon name="phone" size={20} color="#1E90FF" />     +84 {restaurant.phonenumber}</Text>
            <Text style={{
              color: "black",
              fontSize: 15,
              marginTop: 5,
            }}>Đánh giá: {restaurant.stars}  <Icon name="star" size={15} color="#FFCC00" /></Text>
          </View>
        </View>
      </TouchableOpacity>
    )}
  )

  return (
    <View>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../../asset/img/Logo.png")}/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{
        alignSelf: "center",
        }}>
        {listRestaurant}
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  header: {
    alignSelf: "center",
    margin: 20,
  },
  logo: {
    width: 200,
    height: 30,
  },
  restaurant: {
    height:320,
  },
  img: {
    width: 300,
    height: 150,
  },
  name: {
    color: "black",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 5,
  },
  name: {
    color: "black",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 5,

  },
  location: {
    color: "black",
    fontSize: 15,
    marginTop: 5,
  },

})

export default Home;
