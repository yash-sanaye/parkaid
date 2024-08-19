import { View, Text } from "react-native";
import React from "react";
import CustomButton from "../../components/customButton";
import { Link, Redirect, router } from "expo-router";

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <CustomButton
        title={"Go to Map"}
        handlePress={() => router.push("/map/map")}
        containerStyles=" w-full mt-7 "
      />
    </View>
  );
};

export default Home;
