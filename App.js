import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// NAvitegation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#7c6791" },
            headerTintColor: "white",
            headerTitleStyle: { fontWeight: "bold" },
            contentStyle: { backgroundColor: "#3f2f45" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "Meal Categories",
            }}
          />
          <Stack.Screen
            name="MealsOverView"
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,
            //   };
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
