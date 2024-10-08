import React from "react";
import { images } from "../constants/images";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/customButton";
import { View, Text, Image, ScrollView } from "react-native";
import { Link, Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";

const Index = () => {
  return (
    <>
      <View>
        <SafeAreaView className="">
          <View className="w-full items-center justify-center h-[85vh] px-4">
            <Text className="text-xl m-5">Park Aid logo here</Text>
            <Image
              className="max-w-[380px] w-full h-[400px]"
              source={images.manpark}
              resizeMode="contain"
            />
            <View className="relative items-center justify-center">
              <Text className="text-2xl mb-2 ">Tired of No Parking signs?</Text>
              <Text className=" mx-2 text-xl  text-center">
                Switch to
                <Text className="text-xl font-bold text-secondary">
                  {" "}
                  ParkAid{" "}
                </Text>
                and stop worrying about parking fines.
              </Text>
            </View>
            <CustomButton
              title={"Continue"}
              handlePress={() => router.push("/sign-in")}
              containerStyles=" w-full mt-7 "
            />
          </View>
        </SafeAreaView>
      </View>
      <StatusBar backgroundColor="#FF9C01" style="dark" />
    </>
  );
};

export default Index;
