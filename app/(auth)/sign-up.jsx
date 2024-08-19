import { View, Text, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import Input from "../../components/input";
import CustomButton from "../../components/customButton";
import { Link } from "expo-router";
import { createUser } from "../../lib/appwrite";

const SignUp = () => {
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
      const result = await createUser(
        form.email,
        form.password,
        form.fName,
        form.lName,
        form
      );

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
              Create a{" "}
              <Text className="text-2xl mb-5 font-semibold text-secondary">
                ParkAid{" "}
              </Text>
              Account
            </Text>
          </View>
          <Input
            title="Email"
            value={form.email}
            handleChangeText={(e) => setform({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <View className="flex flex-row space-x-4">
            <Input
              title="First Name"
              value={form.fName}
              handleChangeText={(e) => setform({ ...form, fname: e })}
              otherStyles="mt-7 flex-1 mr-1"
            />
            <Input
              title="Last Name"
              value={form.lName}
              handleChangeText={(e) => setform({ ...form, lname: e })}
              otherStyles="mt-7 flex-1 ml-1"
            />
          </View>

          <Input
            title="Password"
            value={form.password}
            handleChangeText={(e) => setform({ ...form, password: e })}
            otherStyles=" mt-7"
          />
          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          <View className="justify-center mt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100">
              Already have an account?
            </Text>
            <Link className=" text-lg text-secondary" href="/sign-in">
              Sign In{" "}
            </Link>
          </View>
          <View className="justify-center mt-7 flex-row">
            <Link className=" text-lg text-secondary" href="/home">
              Skip
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
