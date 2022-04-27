import { StyleSheet, FlatList, View } from 'react-native';
import { useLayoutEffect } from 'react';
import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';
import { CATEGORIES } from '../data/dummy-data';

const MealsOverviewScreen = ({ route, navigation }) => {
  const id = route.params.id;

  useLayoutEffect(() => {
    const { title } = CATEGORIES.find(
      category => category.id === route.params.id
    );
    navigation.setOptions({
      title,
    });
  }, [id, navigation]);

  const displayedMeals = MEALS.filter(
    mealItem => mealItem.categoryIds.indexOf(id) >= 0
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <MealItem meal={item} />}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
