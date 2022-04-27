import { Text, View } from 'react-native';
import { useLayoutEffect, useState } from 'react';
import { MEALS } from '../data/dummy-data';

const MealDetailsScreen = ({ route, navigation }) => {
  const [meal, setMeal] = useState();

  const mealId = route.params.id;

  useLayoutEffect(() => {
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    navigation.setOptions({
      title: selectedMeal.title,
    });
    setMeal(selectedMeal);
  }, []);

  console.log(meal);

  return (
    <View>
      <Text>MealDetailsScreen</Text>
    </View>
  );
};

export default MealDetailsScreen;
