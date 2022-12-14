import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'styled-components';

import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Welcome } from '../pages/Welcome';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  const THEME = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: THEME.COLORS.BACKGROUND,
        },
      }}>
      <Screen name="welcome" component={Welcome} />
      <Screen name="signin" component={SignIn} />
      <Screen name="signup" component={SignUp} />
    </Navigator>
  );
}
