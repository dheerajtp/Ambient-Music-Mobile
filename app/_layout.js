import React from "react";
import { Stack } from "expo-router";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Layout = () => {
  const router = useRouter();
  const checkOnboardingStatus = async () => {
    const onboardingComplete = await AsyncStorage.getItem("onBoarded");
    if (onboardingComplete === null || onboardingComplete.status === "false") {
      router.push("/onBoardingScreen");
    } else {
      router.push("/");
    }
  };

  Promise.resolve().then(() => checkOnboardingStatus());

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="onBoardingScreen"
        options={{ headerShown: false, animation: "none" }}
      />
    </Stack>
  );
};

export default Layout;
