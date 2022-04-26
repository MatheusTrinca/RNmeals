import { StyleSheet, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTitle from '../components/CategoryGridTitle';

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = ({ item: { title, color, id } }) => {
    const pressHandler = () => {
      navigation.navigate('MealsOverview', { id });
    };

    return (
      <CategoryGridTitle title={title} color={color} onPress={pressHandler} />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
