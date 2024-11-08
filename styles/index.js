import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: responsiveHeight(10),
  },
  heading: {
    fontSize: 20,
    fontFamily: "Bold",
  },
  subHeading: {
    fontSize: 18,
    fontFamily: "Light",
    color: "#666",
    marginTop: 8,
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    width: responsiveWidth(80),
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 18,
  },
  image: {
    width: "100%",
    height: 200,
  },
  articleBody: {
    padding: 24,
  },
  title: {
    marginBottom: 18,
    fontFamily: "Light",
    fontSize: 24,
    color: "black",
  },
  description: {
    marginBottom: 24,
    fontFamily: "Light",
    fontSize: 16,
    lineHeight: 24,
  },
  onBoardingImage: {
    width: responsiveWidth(30),
    height: "100%",
    aspectRatio: 1,
  },
  onBoardingContainer: {
    flex: 1,
  },
  onBoarindPadding: {
    paddingHorizontal: 15,
  },
  onBoardingLottie: {
    width: responsiveWidth(80),
    height: responsiveWidth(60),
  },
  onboarding_container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  onboarding_pageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  onboarding_imageContainer: {
    flex: 0.7,
    justifyContent: "center",
  },
  onboarding_textContainer: {
    flex: 0.3,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  onboarding_title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  onboarding_subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
  },
  onboarding_paginationContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  onboarding_paginationDots: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  onboarding_dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  onboarding_buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  onboarding_skipButton: {
    padding: 10,
  },
  onboarding_skipText: {
    fontSize: 16,
    color: "#666",
  },
  onboarding_nextButton: {
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  onboarding_nextButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default styles;
