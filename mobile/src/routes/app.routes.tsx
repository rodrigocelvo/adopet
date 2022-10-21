import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'styled-components';
import { ForgotPassword } from '../pages/ForgotPassword';
import { Home } from '../pages/Home';
import { Pet } from '../pages/Pet';

import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Welcome } from '../pages/Welcome';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: theme.COLORS.BACKGROUND,
        },
      }}>
      <Screen name="welcome" component={Welcome} />
      <Screen name="signin" component={SignIn} />
      <Screen name="signup" component={SignUp} />
      <Screen name="forgotpassword" component={ForgotPassword} />
      <Screen name="home" component={Home} />
      <Screen name="pet" component={Pet} />
    </Navigator>
  );
}
