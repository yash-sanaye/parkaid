import { View, Text, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import Input from "../../components/input";
import CustomButton from "../../components/customButton";
import { Link } from "expo-router";
import { signIn } from "../../lib/appwrite";

const SignIn = () => {
  const [form, setform] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setisSubmitting] = useState(false);
  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }
    setisSubmitting(true);
    try {
      await signIn(form.email, form.password);

      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setisSubmitting(false);
    }
  };
  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView>
        <View className="w-full flex justify-center  min-h-[85vh] px-4 my-6">
          <View className=" items-center justify-center">
            <Text className="text-3xl m-5 text-white">Park Aid logo here</Text>
          </View>
          <View className=" items-center justify-center">
            <Text className=" item  text-2xl mb-5 text-white">
              Login to{" "}
              <Text className="text-2xl mb-5 font-semibold text-secondary">
                ParkAid{" "}
              </Text>
            </Text>
          </View>
          <Input
            title="Email"
            value={form.email}
            handleChangeText={(e) => setform({ ...form, email: e })}
            otherStyles="mt-7 mb-7"
            keyboardType="email-address"
          />
          <Input
            title="Password"
            value={form.password}
            handleChangeText={(e) => setform({ ...form, password: e })}
            otherStyles=""
          />
          <CustomButton
            title="Sign in"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          <View className="justify-center mt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100">Dont have an account?</Text>
            <Link className=" text-lg text-secondary" href="/sign-up">
              Sign Up{" "}
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
