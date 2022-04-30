import { StyleSheet, Text, View, FlatList } from 'react-native';
//import { useFavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import { useSelector } from 'react-redux';

const FavoritesScreen = () => {
  //const { favoriteMealsIds } = useFavoritesContext();
  const favoriteMealsIds = useSelector(state => state.favoriteMeals.ids);

  const favorites = MEALS.filter(meal =>
    favoriteMealsIds.find(id => id === meal.id)
  );

  if (favorites.length === 0) {
    return (
      <View style={styles.noFavoritesContainer}>
        <Text style={styles.noFavoritesText}>
          You have no favorites meals yet.
        </Text>
      </View>
    );
  }

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
  noFavoritesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noFavoritesText: {
    color: 'white',
    fontSize: 18,
  },
});
