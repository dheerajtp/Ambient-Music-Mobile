import { View } from "react-native";
import { useRouter } from "expo-router";
import styles from "../styles";
import LottieView from "lottie-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomOnboarding from "../components/CustomOnBoarding";

const OnBoardingScreen = () => {
  const router = useRouter();

  const handleDone = async () => {
    await AsyncStorage.setItem("onBoarded", "true");
    router.replace("/(tabs)");
  };

  const onboardingPages = [
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
        "Ambient Music contains 16 sounds which can be used to create endless combinations of sound in your mobile.",
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
        "Ambient music is created from the open-source project Soundify created using Expo, Expo AV. Join Us in Enhancing Ambient Music!",
    },
  ];

  return (
    <View style={styles.onBoardingContainer}>
      <CustomOnboarding
        pages={onboardingPages}
        onDone={handleDone}
        onSkip={handleDone}
      />
    </View>
  );
};

export default OnBoardingScreen;
