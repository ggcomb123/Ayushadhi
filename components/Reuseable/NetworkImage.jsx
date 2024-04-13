import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const NetworkImage = ({ source, width, height, radius, mode }) => {
  return (
    <Image
      source={{ uri: source }}
      style={styles.image(width, height, radius, mode)}
    />
  );
};

export default NetworkImage;

const styles = StyleSheet.create({
  image: (width, height, radius, mode) => ({
    width: width,
    height: height,
    borderRadius: radius,
    resizeMode: mode,
  }),
});
