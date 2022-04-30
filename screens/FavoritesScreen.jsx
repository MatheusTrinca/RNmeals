import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useFavoritesContext } from '../store/favorites-context';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const FavoritesScreen = () => {
  const { favoriteMealsIds } = useFavoritesContext();

  const favorites = MEALS.filter(meal =>
    favoriteMealsIds.find(id => id === meal.id)
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <MealItem meal={item} />}
      />
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
