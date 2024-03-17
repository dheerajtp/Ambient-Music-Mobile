import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import styles from "../styles";
import { Audio } from "expo-av";
import { AntDesign } from "@expo/vector-icons";

const Song = ({ item }) => {
  const [values, setValues] = React.useState({
    playing: false,
    sound: null,
  });

  const playSound = async () => {
    if (values.sound) {
      await values.sound.pauseAsync();
      setValues((prev) => ({
        ...prev,
        playing: false,
        sound: null,
      }));
      ToastAndroid.show("Music paused!", ToastAndroid.SHORT);
    } else {
      const { sound } = await Audio.Sound.createAsync(
        { uri: item.src },
        { isLooping: true, shouldPlay: true, staysActiveInBackground: true }
      );
      setValues((prev) => ({
        ...prev,
        playing: true,
        sound,
      }));
      await sound.playAsync();
      ToastAndroid.show("Music playing!", ToastAndroid.SHORT);
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
        <TouchableOpacity style={styles.readMoreButton} onPress={playSound}>
          {values.sound ? (
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
