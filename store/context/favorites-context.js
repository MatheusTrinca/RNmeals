import { createContext, useContext, useState } from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: id => {},
  removeFavorite: id => {},
});

const FavoritesProvider = ({ children }) => {
  const [favoriteMealsIds, setFavoriteMealsIds] = useState([]);

  const addFavorite = id => {
    setFavoriteMealsIds(prevState => [...prevState, id]);
  };

  const removeFavorite = id => {
    setFavoriteMealsIds(prevState => prevState.filter(mealId => mealId !== id));
  };

  return (
    <FavoritesContext.Provider
      value={{
        favoriteMealsIds,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
export const useFavoritesContext = () => useContext(FavoritesContext);

export default FavoritesProvider;
