import { Stack, Tabs, Redirect } from "expo-router";
import { View, Text, Image } from "react-native";
import icons from "../../constants/icons";
const TabIcon = ({ src, color, name, focused }) => {
  return (
    <View className="items-center justify-center ">
      <Image
        style={{ width: 24, height: 24 }}
        source={src} // Adjusted the path
        resizeMode="contain"
        tintColor={color}
      />
    </View>
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#00ADB5",
        tabBarInactiveTintColor: "#393E46",
        tabBarStyle: {
          backgroundColor: "#EEEEEE",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              src={icons.home}
              color={color}
              name="Home"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: "Activity",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              src={icons.activity}
              color={color}
              name="Activity"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              src={icons.profile}
              color={color}
              name="Profile"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
