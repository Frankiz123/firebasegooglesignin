/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Fbgoogle from './fbgoogle';
import Fbfacebook from './Fbfacebook';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Fbfacebook);
