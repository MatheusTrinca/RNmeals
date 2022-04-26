import { StyleSheet, FlatList, View } from 'react-native';
import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';

const MealsOverviewScreen = ({ route }) => {
  const id = route.params.id;

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
