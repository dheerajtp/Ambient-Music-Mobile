import { View } from "react-native";
import styles from "../styles";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";
import { useNavigation } from "expo-router";
import asyncStorage from "../utils/asyncStorage";

const OnBoardingScreen = () => {
  const navigation = useNavigation();
  const handleDone = () => {
    asyncStorage.storeData("onBoarded", '1');
    navigation.navigate("index");
  };
  return (
    <View style={styles.onBoardingContainer}>
      <Onboarding
        containerStyles={styles.onBoarindPadding}
        onDone={handleDone}
        onSkip={handleDone}
        pages={[
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <LottieView
                  source={require("../animations/meditate.json")}
                  autoPlay
                  loop
                  style={styles.onBoardingLottie}
                />
              </View>
            ),
            title: "A Relaxing Alternative to Soundify.net",
            subtitle:
              "Ambient Music is an alternative of soundify.net which helps to escape from reality and minimize your problems after relaxing with sounds.",
          },
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <LottieView
                  source={require("../animations/combination.json")}
                  autoPlay
                  loop
                  style={styles.onBoardingLottie}
                />
              </View>
            ),
            title: "16 Sounds for Endless Combinations",
            subtitle:
              "Ambient Music contains 16 sounds which can be used to create endless combinations of sound in the browser.",
          },
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <LottieView
                  source={require("../animations/community.json")}
                  autoPlay
                  loop
                  style={styles.onBoardingLottie}
                />
              </View>
            ),
            title: "Join the Community: Enhancing Ambient Music Together!",
            subtitle:
              "Ambient music is created from the open-source project Soundify created using Expo, Expo AV.Join Us in Enhancing Ambient Music: Contribute to the Open-Source Project!",
          },
        ]}
      />
    </View>
  );
};

export default OnBoardingScreen;
