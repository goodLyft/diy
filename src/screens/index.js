import { Navigation } from 'react-native-navigation';

import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import AddScreen from './AddScreen';
import FavoriteScreen from './FavoriteScreen';
import ProfileScreen from './ProfileScreen';


// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('DIYProject.HomeScreen', () => HomeScreen);
  Navigation.registerComponent('DIYProject.SearchScreen', () => SearchScreen);
  Navigation.registerComponent('DIYProject.AddScreen', () => AddScreen);
  Navigation.registerComponent('DIYProject.FavoriteScreen', () => FavoriteScreen);
  Navigation.registerComponent('DIYProject.ProfileScreen', () => ProfileScreen);
}
