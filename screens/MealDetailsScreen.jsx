import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import { useLayoutEffect } from 'react';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import MealListItem from '../components/MealListItem';
import IconButton from '../components/IconButton';
//import { useFavoritesContext } from '../store/context/favorites-context';
import { addFavorite, removeFavorite } from '../store/redux/favoriteSlice';
import { useSelector, useDispatch } from 'react-redux';

const MealDetailsScreen = ({ route, navigation }) => {
  const mealId = route.params.id;

  // const { addFavorite, favoriteMealsIds, removeFavorite } =
  //   useFavoritesContext();

  const favoriteMealsIds = useSelector(state => state.favoriteMeals.ids);

  const dispatch = useDispatch();

  const meal = MEALS.find(meal => meal.id === mealId);

  const isFavorite = favoriteMealsIds.includes(mealId);

  const handlerPressed = () => {
    if (isFavorite) {
      dispatch(removeFavorite(mealId));
    } else {
      dispatch(addFavorite(mealId));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          name={isFavorite ? 'star' : 'star-outline'}
          color="white"
          onPress={handlerPressed}
        />
      ),
    });
  }, [navigation, handlerPressed]);

  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <Image source={{ uri: meal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{meal.title}</Text>
        <View>
          <MealDetails meal={meal} textStyle={styles.detailText} />
        </View>
        <View style={styles.list}>
          <Text style={styles.titleList}>Ingredients</Text>
          {meal.ingredients.map((ingredient, index) => (
            <MealListItem key={index} item={ingredient} />
          ))}
          <Text style={styles.titleList}>Steps</Text>
          {meal.steps.map((step, index) => (
            <MealListItem key={index} item={step} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  list: {
    width: '80%',
    textAlign: 'center',
  },
  titleList: {
    fontSize: 18,
    color: '#d8a596',
    textAlign: 'center',
    marginVertical: 5,
  },
});
