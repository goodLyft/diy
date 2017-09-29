/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { registerScreens } from './screens';
import { iconsMap, iconsLoaded } from './helpers/icons-loader';

registerScreens(); // this is where you register all of your app's screens

let icons;

const styles = StyleSheet.create({
  button: {
    overflow: 'hidden',
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

// Our custom component we want as a button in the nav bar
const CameraButton = () => (
  <View style={styles.button}>
    <Ionicons name="ios-camera-outline" size={34} color="black" style={{ lineHeight: 34 }} />
  </View>
)

const SendButton = () => (
  <View style={styles.button}>
    <Ionicons name="ios-send-outline" size={34} color="black" style={{ lineHeight: 34 }} />
  </View>
)

// Register the component
Navigation.registerComponent('CameraButton', () => CameraButton);
Navigation.registerComponent('SendButton', () => SendButton);

export default class App {
  constructor() {
    iconsLoaded.then(() => {
      // personIcon = iconsMap['ios-person']
      // homeIcon = iconsMap['ios-home']
      icons = iconsMap
      this.startApp();
    });
  }

// start the app
  startApp() {
    Navigation.startTabBasedApp({
      tabs: [{
        screen: 'DIYProject.HomeScreen', // this is a registered name for a screen
        icon: icons['ios-home-outline'],
        selectedIcon: icons['ios-home'],
        title: 'Home',
        iconInsets: { top: 6, bottom: -6 },
        navigatorButtons: {
          leftButtons: [
            {
              id: 'camera-button',
              component: 'CameraButton' // This line loads our component as a nav bar button item
            }
          ],
          rightButtons: [
            {
              id: 'send-button',
              component: 'SendButton' // This line loads our component as a nav bar button item
            }
          ]
        }
      }, {
        screen: 'DIYProject.SearchScreen', // this is a registered name for a screen
        icon: icons['ios-search-outline'],
        selectedIcon: icons['ios-search'],
        title: 'Search',
        iconInsets: { top: 6, bottom: -6 }
      }, {
        screen: 'DIYProject.AddScreen', // this is a registered name for a screen
        icon: icons['ios-add-circle-outline'],
        selectedIcon: icons['ios-add-circle'],
        title: 'Add',
        iconInsets: { top: 6, bottom: -6 }
      }, {
        screen: 'DIYProject.FavoriteScreen', // this is a registered name for a screen
        icon: icons['ios-heart-outline'],
        selectedIcon: icons['ios-heart'],
        title: 'Favorite',
        iconInsets: { top: 6, bottom: -6 }
      }, {
        screen: 'DIYProject.ProfileScreen', // this is a registered name for a screen
        icon: icons['ios-person-outline'],
        selectedIcon: icons['ios-person'],
        title: 'Profile',
        iconInsets: { top: 6, bottom: -6 }
      }],
      tabsStyle: {
        tabBarButtonColor: 'black',
        tabBarSelectedButtonColor: 'black'
      }
    });
  }
};



// export default class DIYProject extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.android.js
//         </Text>
//         <Text style={styles.instructions}>
//           Double tap R on your keyboard to reload,{'\n'}
//           Shake or press menu button for dev menu
//         </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
//
// AppRegistry.registerComponent('DIYProject', () => DIYProject);
