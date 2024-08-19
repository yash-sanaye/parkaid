import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE = 19.01266928935461;
const LONGITUDE = 72.82985862333759;
const LATITUDE_DELTA = 0.0422;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const MapScreen = () => {
  const [region, setRegion] = useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  const parkingSpots = [
    {
      id: 1,
      latitude: 19.006304421283364,
      longitude: 72.82851193769865,
      title: "BMC Pay and Park",
    },
    {
      id: 2,
      latitude: 19.02988541679583,
      longitude: 72.83982926321349,
      title: "Madhus House",
    },
  ];

  return (
    <View style={styles.container}>
      <MapView
        provider={MapView.PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
        onRegionChangeComplete={(region) => setRegion(region)}
      >
        {parkingSpots.map((spot) => (
          <Marker
            key={spot.id}
            coordinate={{ latitude: spot.latitude, longitude: spot.longitude }}
            title={spot.title}
          />
        ))}
      </MapView>
      <View style={styles.bottomPanel}>
        <Text style={styles.infoText}>
          Available Parking Spots: {parkingSpots.length}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bottomPanel: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    width: "90%",
    alignItems: "center",
  },
  infoText: {
    fontSize: 16,
  },
});

export default MapScreen;
