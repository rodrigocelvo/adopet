import { createStackNavigator } from '@react-navigation/stack';
import { ForgotPassword } from '../pages/ForgotPassword';

import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Welcome } from '../pages/Welcome';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="welcome" component={Welcome} />
      <Screen name="signin" component={SignIn} />
      <Screen name="signup" component={SignUp} />
      <Screen name="forgotpassword" component={ForgotPassword} />
    </Navigator>
  );
}
