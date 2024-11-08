import React, { useCallback } from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  ActivityIndicator,
  useColorScheme,
} from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import styles from "../../styles";
import songs from "../../data/songs.json";
import Song from "../../components/Song";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const App = () => {
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
        <Text style={styles.heading}>Ambient Music</Text>
        <View>
          <FlatList
            data={songs}
            renderItem={({ item }) => <Song item={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
