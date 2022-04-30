import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
//import FavoritesProvider from './store/favorites-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: 'white',
          sceneContainerStyle: { backgroundColor: '#3f2f25' },
          drawerStyle: { backgroundColor: '#3f2f25' },
          drawerInactiveTintColor: 'white',
          drawerActiveBackgroundColor: '#e4baa1',
          drawerActiveTintColor: '#351401',
        }}
      >
        <Drawer.Screen
          name="MealsDrawer"
          component={CategoriesScreen}
          options={{
            headerTitle: 'All Categories',
            drawerLabel: 'All Categories',
            drawerIcon: ({ color, size }) => (
              <Ionicons size={size} color={color} name="list" />
            ),
          }}
        />
        <Drawer.Screen
          name="FavoritesScreen"
          component={FavoritesScreen}
          options={{
            headerTitle: 'Favorites',
            drawerLabel: 'Favorites',
            drawerIcon: ({ color, size }) => (
              <Ionicons size={size} color={color} name="star" />
            ),
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoritesProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#351401' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#3f2f25' },
            }}
          >
            <Stack.Screen
              name="MealsCategory"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="MealDetails"
              component={MealDetailsScreen}
              options={{
                headerTitle: 'About The Meal',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoritesProvider> */}
    </>
  );
}
