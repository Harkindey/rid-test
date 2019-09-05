import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
	{
		key: 'somethun',
		title: 'Title 1',
		text: 'Description.\nSay something cool',
		backgroundColor: '#59b2ab',
	},
	{
		key: 'somethun-dos',
		title: 'Title 2',
		text: 'Other cool stuff',
		backgroundColor: '#febe29',
	},
	{
		key: 'somethun1',
		title: 'Rocket guy',
		text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
		backgroundColor: '#22bcb5',
	},
];

export class OnBoardingUi extends Component {
	componentDidMount() {
		console.log('onboarding');
	}
	_renderItem = ({ item }) => {
		return (
			<View style={styles.slide}>
				<Text style={styles.title}>{item.title}</Text>
				<Text style={styles.text}>{item.text}</Text>
			</View>
		);
	};
	_onDone = () => {
		// User finished the introduction. Show real app through
		// navigation or simply by controlling state
		console.log('done');
	};
	render() {
		return (
			<AppIntroSlider
				renderItem={this._renderItem}
				slides={slides}
				onDone={this._onDone}
			/>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
	},
	slide: {},
	title: {},
	text: {},
});
