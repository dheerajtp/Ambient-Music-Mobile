import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles";

const CustomOnboarding = ({
  pages = [],
  onDone = () => {},
  onSkip = () => {},
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width } = useWindowDimensions();
  const scrollViewRef = useRef(null);

  const handleScroll = (event) => {
    const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(newIndex);
  };

  const goToNextPage = () => {
    if (currentIndex < pages.length - 1) {
      scrollViewRef.current.scrollTo({
        x: (currentIndex + 1) * width,
        animated: true,
      });
    } else {
      onDone();
    }
  };

  const renderPagination = () => {
    const isLastPage = currentIndex === pages.length - 1;

    return (
      <View style={styles.onboarding_paginationContainer}>
        <View style={styles.onboarding_paginationDots}>
          {pages.map((_, i) => (
            <View
              key={i}
              style={[
                styles.onboarding_dot,
                { backgroundColor: i === currentIndex ? "#000" : "#ccc" },
              ]}
            />
          ))}
        </View>

        <View style={styles.onboarding_buttonContainer}>
          {!isLastPage && (
            <TouchableOpacity
              style={styles.onboarding_skipButton}
              onPress={onSkip}
            >
              <Text style={styles.onboarding_skipText}>Skip</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={styles.onboarding_nextButton}
            onPress={goToNextPage}
          >
            <Text style={styles.onboarding_nextButtonText}>
              {isLastPage ? "Get Started" : "Next"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.onboarding_container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {pages.map((page, index) => (
          <View
            key={index}
            style={[
              styles.onboarding_pageContainer,
              { width, flexGrow: 1, justifyContent: "center" },
            ]}
          >
            <View style={styles.onboarding_imageContainer}>{page.image}</View>
            <View
              style={[styles.onboarding_textContainer, { paddingBottom: 60 }]}
            >
              <Text style={styles.onboarding_title}>{page.title}</Text>
              <Text style={styles.onboarding_subtitle}>{page.subtitle}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      {renderPagination()}
    </SafeAreaView>
  );
};

export default CustomOnboarding;
