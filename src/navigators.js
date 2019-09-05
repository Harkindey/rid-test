import {
	createStackNavigator,
	createAppContainer,
	createSwitchNavigator,
	createDrawerNavigator,
} from 'react-navigation';

import { OnBoardingUi } from 'src/containers/onboarding';
import { AuthenticateUi } from 'src/containers/auth';
import { SignUpUi } from 'src/containers/auth/signup';

const AuthNavigator = createStackNavigator(
	{
		OnBoarding: { screen: OnBoardingUi },
		Authenticate: { screen: AuthenticateUi },
		SignUp: { screen: SignUpUi },
	},
	{ headerMode: 'none', initialRouteName: 'OnBoarding' }
);

export const RootNavigator = createAppContainer(
	createSwitchNavigator({
		Auth: AuthNavigator,
	})
);
