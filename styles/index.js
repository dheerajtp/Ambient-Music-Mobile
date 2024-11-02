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
});

export default styles;
