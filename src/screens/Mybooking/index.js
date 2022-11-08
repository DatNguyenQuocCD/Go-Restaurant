import { useState } from 'react';
import { Button, ScrollView, Image, StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';

const listRestaurant = [
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



const listStar = [
  { star: 1 },
  { star: 2 },
  { star: 3 },
  { star: 4 },
  { star: 5 },
];

function Map() {
  const [location, setLocation] = useState({
    latitude: 16.06089,
    longitude: 108.24079,
  })

  const [star, setStar] = useState(0)
  const [nameRestaurant, setNameRestaurant] = useState("")

  const markers = listRestaurant.map((restaurant) => {
    if (restaurant.stars >= star && nameRestaurant ==="") {
      if (restaurant.latitude != location.latitude) {
        return (
          <Marker coordinate={{
            latitude: restaurant.latitude,
            longitude: restaurant.longitude,
          }}>
            <Image style={styles.icon} source={require('../../asset/img/restaurant.png')} />
          </Marker>
        )
      } else {
        return (
          <Marker coordinate={location}>
            <Image style={styles.icon} source={require('../../asset/img/restaurant1.png')} />
          </Marker>
        )
      }
    } if (restaurant.name === nameRestaurant) {
      return (
        <Marker coordinate={location}>
          <Image style={styles.icon} source={require('../../asset/img/restaurant1.png')} />
        </Marker>
      )
    }
  }
  )

  const restaurants = listRestaurant.map((restaurant) => {
    if (restaurant.stars >= star && nameRestaurant === "") {
      return (
        <TouchableOpacity style={styles.restaurant}
          onPressIn={newLocation => setLocation({
            latitude: restaurant.latitude,
            longitude: restaurant.longitude,
          })}
        >
          <View style={{ width: 300, }}>
            <Image source={{ uri: restaurant.img }} style={styles.img} />
            <Text style={styles.name}>{restaurant.name}</Text>
            <Text style={styles.location}><Icon name="location-arrow" size={20} color="#1E90FF" />     {restaurant.location}</Text>
            <Text style={styles.location}><Icon name="phone" size={20} color="#1E90FF" />     +84 {restaurant.phonenumber}</Text>
            <Text style={styles.location}>Đánh giá: {restaurant.stars}  <Icon name="star" size={15} color="#FFCC00" /></Text>
          </View>
        </TouchableOpacity>
      )
    } if (restaurant.name === nameRestaurant) {
      return (
        <TouchableOpacity style={styles.restaurant}
          onPressIn={newLocation => setLocation({
            latitude: restaurant.latitude,
            longitude: restaurant.longitude,
          })}
        >
          <View style={{ width: 300, }}>
            <Image source={{ uri: restaurant.img }} style={styles.img} />
            <Text style={styles.name}>{restaurant.name}</Text>
            <Text style={styles.location}><Icon name="location-arrow" size={20} color="#1E90FF" />     {restaurant.location}</Text>
            <Text style={styles.location}><Icon name="phone" size={20} color="#1E90FF" />     +84 {restaurant.phonenumber}</Text>
            <Text style={styles.location}>Đánh giá: {restaurant.stars}  <Icon name="star" size={15} color="#FFCC00" /></Text>
          </View>
        </TouchableOpacity>
      )
    }
  }
  )

  const stars = listStar.map((star) => {
    if (star.star == 1) {
      return (
        <Text
          style={styles.option}
          onPress={newStar => setStar(0)}
        >Tất cả</Text>
      )
    } else {
      return (
        <Text
          style={styles.option}
          onPress={newStar => setStar(star.star)}
        >{"Từ " + star.star + " sao trở lên"}</Text>
      )
    }
  }
  )

  return (
    <View>
      <View style={styles.container}>
        <MapView
          showsUserLocation={true}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 16.06089,
            longitude: 108.24079,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >

          <Marker coordinate={{
            latitude: 16.060959,
            longitude: 108.240774,
          }} >
          </Marker>
          {markers}
        </MapView>
      </View>
      <View style={styles.seach}>
        <Icon name="search" size={20} color="black" style={{ padding: 15 }}/>
        <TextInput style={{ width: 340 }} placeholder="Search restaurant name "
          onChangeText={newName => setNameRestaurant(newName)} />
      </View>
      <View style={{ top: 20 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {stars}
        </ScrollView>
      </View>
      <View style={{ top: 400 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
          {restaurants}
        </ScrollView>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 800,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  icon: {
    width: 35,
    height: 35,
  },
  seach: {
    backgroundColor: "white",
    height: 50,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  restaurant: {
    backgroundColor: "white",
    height: 320,
    padding: 20,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10,
  },
  img: {
    width: 300,
    height: 150
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
  option: {
    backgroundColor: "white",
    padding: 10,
    marginLeft: 20,
    borderRadius: 10
  }
});

export default Map;



