import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
} from "react-native";
import styles from "../styles";
import { Audio } from "expo-av";
import { AntDesign } from "@expo/vector-icons";

const Song = ({ item }) => {
  const [values, setValues] = React.useState({
    playing: false,
    sound: null,
    loading: false,
  });

  useEffect(() => {
    const configureAudio = async () => {
      try {
        await Audio.setAudioModeAsync({
          staysActiveInBackground: true,
          allowsRecordingIOS: false,
          playsInSilentModeIOS: true,
          shouldDuckAndroid: true,
          playThroughEarpieceAndroid: false,
        });
      } catch (error) {
        console.error("Error configuring audio:", error);
      }
    };

    configureAudio();

    return () => {
      if (values.sound) {
        values.sound.unloadAsync();
      }
    };
  }, []);

  const playSound = async () => {
    try {
      if (values.sound) {
        await values.sound.pauseAsync();
        setValues((prev) => ({
          ...prev,
          playing: false,
          sound: null,
          loading: false,
        }));
        ToastAndroid.show("Music paused!", ToastAndroid.SHORT);
      } else {
        setValues((prev) => ({ ...prev, loading: true }));
        const { sound } = await Audio.Sound.createAsync(
          { uri: item.src },
          {
            isLooping: true,
            shouldPlay: true,
            staysActiveInBackground: true,
            volume: 1.0,
            progressUpdateIntervalMillis: 1000,
          },
          onPlaybackStatusUpdate
        );

        setValues((prev) => ({
          ...prev,
          playing: true,
          sound,
          loading: false,
        }));

        await sound.playAsync();
        ToastAndroid.show("Music playing!", ToastAndroid.SHORT);
      }
    } catch (error) {
      console.error("Error playing sound:", error);
      ToastAndroid.show("Error playing audio!", ToastAndroid.SHORT);
      if (values.sound) {
        await values.sound.unloadAsync();
        setValues((prev) => ({
          ...prev,
          playing: false,
          sound: null,
          loading: false,
        }));
      }
    }
  };

  const onPlaybackStatusUpdate = (status) => {
    if (status.error) {
      console.error("Playback error:", status.error);
      ToastAndroid.show("Error playing audio!", ToastAndroid.SHORT);
    }
  };

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: item.image }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.articleBody}>
        <Text style={styles.title}>{item.title}</Text>
        <TouchableOpacity
          style={styles.readMoreButton}
          onPress={playSound}
          activeOpacity={0.7}
          disabled={values.loading}
        >
          {values.loading ? (
            <ActivityIndicator size="small" color="black" />
          ) : values.sound ? (
            <AntDesign name="pausecircleo" size={24} color="black" />
          ) : (
            <AntDesign name="playcircleo" size={24} color="black" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Song;
