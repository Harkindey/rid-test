import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { RootNavigator } from './navigators';

export default class App extends Component {
	render() {
		return (
			<View>
				<RootNavigator />
			</View>
		);
	}
}
