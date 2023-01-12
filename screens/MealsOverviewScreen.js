import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../Data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route, navigation }) => {
  const catID = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catID) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((cat) => cat.id === catID).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catID, navigation]);

  function renderMealItem(itemData) {
    // destructuring
    const item = itemData.item;

    // make object destructuring
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };

    return <MealItem {...mealItemProps} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
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
