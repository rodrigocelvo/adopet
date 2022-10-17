import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../pages/SignIn';
import { Welcome } from '../pages/Welcome';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="welcome" component={Welcome} />
      <Screen name="signin" component={SignIn} />
    </Navigator>
  );
}
