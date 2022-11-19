import { createStackNavigator } from '@react-navigation/stack';

import { useTheme } from 'styled-components';
import { Home } from '../pages/Home';
import { Pet } from '../pages/Pet';
import { PetSearch } from '../pages/PetSearch';
import { Profile } from '../pages/Profile';

const { Navigator, Screen } = createStackNavigator();

import { UserBottomTabRoutes } from './user.tab.routes';

export function UserStackRoutes() {
  const THEME = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,

        cardStyle: {
          backgroundColor: THEME.COLORS.BACKGROUND,
        },
      }}>
      <Screen name="UserTabRoutes" component={UserBottomTabRoutes} />
      <Screen name="home" component={Home} />
      <Screen name="pet" component={Pet} />
      <Screen name="petsearch" component={PetSearch} />
      <Screen name="profile" component={Profile} />
    </Navigator>
  );
}
