import { Image, StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  marker: {
    width: 35,
    height: 35,
  }
});

const listRestaurant = [
  {
    name: "Ichiban sushi đà nẵng",
    location: "206 Đ. Trần Phú, Phước Ninh, Hải Châu, Đà Nẵng 555700, Vietnam",
    phonenumber: "0972096486",
    img: "https://lh5.googleusercontent.com/p/AF1QipO0287nJey0gNOOXY1gN0IMcYmblSocWZYnqis=w408-h268-k-no",
    latitude: 16.064979,
    longitude: 108.223180,
  },
  {
    name: "Quán Cô Hồng - Đặc Sản Đà Nẵng",
    location: "45-47 An Thượng 2, Bắc Mỹ An, Ngũ Hành Sơn, Đà Nẵng 550000, Vietnam",
    phonenumber: "0934916911",
    img: "https://lh5.googleusercontent.com/p/AF1QipNdKBc6P5XcsE0zxGhh7kRUeMGaEgXe5vOV9IXU=w408-h544-k-no",
    latitude: 16.054957,
    longitude: 108.239359,
  },
  {
    name: "Bikini Bottom Express",
    location: "103 Nguyễn Văn Thoại, An Hải Đông, Sơn Trà, Đà Nẵng 550000, Vietnam",
    phonenumber: "0905661186",
    img: "https://lh5.googleusercontent.com/p/AF1QipOe1oR8q_8nUkFYP4tJx6vbuRlQlobYx9-rFaPS=w425-h240-k-no",
    latitude: 16.049485,
    longitude: 108.247543,
  },
  {
    name: "Hang's Kitchen Restaurant",
    location: "90 Châu Thị Vĩnh Tế, Bắc Mỹ Phú, Ngũ Hành Sơn, Đà Nẵng 000052, Vietnam",
    phonenumber: "0903551460",
    img: "https://lh5.googleusercontent.com/p/AF1QipN5dxsOB9uHKtn5ERXTRZhZCi5OwNz8ti1OBlXv=w408-h544-k-no",
    latitude: 16.051712,
    longitude: 108.240033,
  },
]

const restaurants = listRestaurant.map((restaurant) =>
  <Marker coordinate={{
    latitude: restaurant.latitude,
    longitude: restaurant.longitude,
  }}>
    <Image style={styles.marker} source={require('../../asset/img/restaurant.png')} />
  </Marker>
)
export default () => (
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
        // showsUserLocation
        // followsUserLocation
        // showsMyLocationButton
        // initialRegion={{
        //   latitude: 16.06089,
        //   longitude: 108.24079,
        //   latitudeDelta: 0.02,
        //   longitudeDelta: 0.02,
        // }}
      >
        
        <Marker coordinate={{
          latitude: 16.06089,
          longitude: 108.24079,
        }} >
        </Marker>
        {restaurants}
      </MapView>
    </View>
  </View>
);