import React, { useState } from "react";
import { View, Text, useColorScheme, Pressable, Animated } from "react-native";
import darkStyles from "../styles/darkModeStyles";
import { FontAwesome5 } from "@react-native-vector-icons/fontawesome5";
import lightStyles from "../styles/lightModeStyles";

export default function UpperSide() {
  const isDarkMode = useColorScheme() === "dark";
  const historyIconColor = isDarkMode ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)";
  const prevOperationTextStyle = isDarkMode ? darkStyles.prevOperationText : lightStyles.prevOperationText;
  const currentOperationTextStyle = isDarkMode ? darkStyles.currentOperationText : lightStyles.currentOperationText;
  const [scale] = useState(new Animated.Value(1));

  const animateIn = () => {
    Animated.spring(scale, {
      toValue: 0.9,
      useNativeDriver: true,
      speed: 20,
      bounciness: 0,
    }).start();
  };

  const animateOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 20,
      bounciness: 0,
    }).start();
  };

  return (
    <View style={darkStyles.upperSideContainer}>
      <Animated.View style={{ transform: [{ scale }] }}>
        <Pressable
          onPressIn={animateIn}
          onPressOut={animateOut}
          style={darkStyles.historyContainer}
        >
          <FontAwesome5 name="history" size={24} color={historyIconColor} iconStyle="solid" />
        </Pressable>
      </Animated.View>

      <View style={darkStyles.prevOperationContainer}>
        <Text style={prevOperationTextStyle}>2122 / 2</Text>
      </View>

      <View style={darkStyles.currentOperationContainer}>
        <Text style={currentOperationTextStyle}>1061</Text>
      </View>
    </View>
  );
}
