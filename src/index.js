import React, { Component } from 'react';
import { Text, View, StatusBar, SafeAreaView } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { RootNavigator } from './navigators';

export class App extends Component {
	componentDidMount() {
		// do stuff while splash screen is shown
		// After having done stuff (such as async tasks) hide the splash screen
		SplashScreen.hide();
	}
	render() {
		return (
			<View style={styles.container}>
				<RootNavigator />
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
	},
};
