import { useState } from 'react';
import { Button, ScrollView, Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';

const listRestaurant = [
  {
    name: "Ichiban sushi đà nẵng",
    location: "206 Đ. Trần Phú, Phước Ninh, Hải Châu, Đà Nẵng 555700, Vietnam",
    phonenumber: "972096486",
    img: "https://lh5.googleusercontent.com/p/AF1QipO0287nJey0gNOOXY1gN0IMcYmblSocWZYnqis=w408-h268-k-no",
    stars: 4,
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
    stars: 3,
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
]

function Map() {
  const [location, setLocation] = useState({
    latitude: 16.06089,
    longitude: 108.24079,
  })

  const markers = listRestaurant.map((restaurant) => {
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
  }
  )

  const restaurants = listRestaurant.map((restaurant) => 
    <TouchableOpacity style={styles.restaurant}
      onPressIn={newLocation => setLocation({
        latitude: restaurant.latitude,
        longitude: restaurant.longitude,
      })}
    >
      <View style={{width:300,}}>
        <Image source={{ uri: restaurant.img }} style={styles.img} />
        <Text style={styles.name}>{restaurant.name}</Text>
        <Text style={styles.location}><Icon name="location-arrow" size={20} color="#1E90FF"/>     {restaurant.location}</Text>
        <Text style={styles.location}><Icon name="phone" size={20} color="#1E90FF" />     +84 {restaurant.phonenumber}</Text>
      </View>
    </TouchableOpacity>
    // <Button
    //   title= {restaurant.name}
    //   color={"#38424F"}
    //   onPress={newLocation => setLocation({
    //     latitude: restaurant.latitude,
    //     longitude: restaurant.longitude,
    //   })}
    // />
  )

  return (
    <View>
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 16.06089,
            longitude: 108.24079,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
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
      <View style={{top:30}}>
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
  restaurant: {
    backgroundColor: "white",
    height: 300,
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
    color:"black",
    fontSize: 15,
    marginTop: 5,
  },
});

export default Map;

