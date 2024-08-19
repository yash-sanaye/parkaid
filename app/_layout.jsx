import { Stack, Tabs, Slot } from "expo-router";
import { Text, View, StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar backgroundColor="#FF9C01" barStyle="dark-content" />
    </>
  );
}
