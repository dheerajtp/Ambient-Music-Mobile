import React, { useCallback } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
  useColorScheme,
} from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import styles from "../../styles";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const About = () => {
  const [fontsLoaded, fontError] = useFonts({
    Bold: require("../../fonts/Bold.ttf"),
    Light: require("../../fonts/Light.ttf"),
  });

  const colorScheme = useColorScheme();

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  const openGitHub = () => {
    Linking.openURL("https://github.com/dheerajtp/Ambient-Music-Mobile");
  };

  if (!fontsLoaded && !fontError) {
    return (
      <SafeAreaView
        style={[
          styles.container,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <View style={styles.contentContainer}>
        <Text style={styles.subHeading}>Ambient Music</Text>
        <Text style={styles.subHeading}>
          Experience relaxation through sound
        </Text>
        <TouchableOpacity onPress={openGitHub}>
          <Text style={styles.link}>View on GitHub</Text>
        </TouchableOpacity>
        <View style={styles.placeholder}></View>
      </View>
    </SafeAreaView>
  );
};

export default About;
