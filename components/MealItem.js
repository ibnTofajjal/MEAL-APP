import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const MealItem = ({ title, imageUrl, affordability, complexity, duration }) => {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.pressedButton : null,
        ]}
      >
        <View>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{duration}m</Text>
          <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 3,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    margin: 10,
  },
  pressedButton: {
    opacity: 0.5,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  detailItem: {
    marginHorizontal: 10,
    marginBottom: 10,
    fontSize: 13,
  },
});
