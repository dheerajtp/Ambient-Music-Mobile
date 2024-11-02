import React from "react";
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

const Layout = () => {
  const router = useRouter();
  
  const checkOnboardingStatus = async () => {
    const onboardingComplete = await AsyncStorage.getItem("onBoarded");
    if (onboardingComplete === null || onboardingComplete.status === "false") {
      router.push("/onBoardingScreen");
    }
  };

  React.useEffect(() => {
    checkOnboardingStatus();
  }, []);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#999",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          headerShown: false,
          tabBarLabel: "About",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="info-circle" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="onBoardingScreen"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
};

export default Layout;