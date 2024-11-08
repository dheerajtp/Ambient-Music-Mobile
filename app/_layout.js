// app/_layout.js
import React, { useEffect, useState } from "react";
import { Stack } from "expo-router";
import { useRouter, useSegments } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TabsLayout from "./(tabs)/_layout";

const RootLayout = () => {
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      const onboardingComplete = await AsyncStorage.getItem("onBoarded");
      if (onboardingComplete === "true") {
        setIsOnboardingComplete(true);
        if (segments[0] === "onboarding") {
          router.replace("/(tabs)/");
        }
      } else {
        setIsOnboardingComplete(false);
        if (segments[0] !== "onboarding") {
          router.replace("/onBoardingScreen");
        }
      }
    };

    checkOnboardingStatus();
  }, [segments]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="onBoardingScreen"
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen name="tabs" />
    </Stack>
  );
};

export default RootLayout;
