/**
 * @format
 */

import {AppRegistry} from 'react-native';
import FindAppEnt from './FindAppEnt';
import {name as appName} from './app.json';

if (__DEV__) {
  console.warn = () => {};
}

AppRegistry.registerComponent(appName, () => FindAppEnt);
