import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealsOverviewScreen = ({ route }) => {
  const catID = route.params.categoryId;
  return (
    <View style={styles.container}>
      <Text>mealsOverviewScreen - {catID}</Text>
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
