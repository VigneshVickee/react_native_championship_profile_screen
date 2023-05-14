/**
 * @format
 */

import {AppRegistry, StatusBar, StyleSheet, Text} from 'react-native';
import ProfileApp from './profile';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ProfileApp);
