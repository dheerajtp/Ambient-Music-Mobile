import React, { useCallback } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import styles from "../styles";
import songs from "../data/songs.json";
import Song from "../components/Song";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    Bold: require("../fonts/Bold.ttf"),
    Light: require("../fonts/Light.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>Ambient Music</Text>
        <View>
          <FlatList
            data={songs}
            renderItem={({ item }) => {
              return <Song item={item} />;
            }}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
