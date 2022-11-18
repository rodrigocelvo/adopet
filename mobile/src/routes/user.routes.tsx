import { createStackNavigator } from '@react-navigation/stack';

import { useTheme } from 'styled-components';
import { Home } from '../pages/Home';
import { Pet } from '../pages/Pet';
import { PetSearch } from '../pages/PetSearch';
import { Profile } from '../pages/Profile';

const { Navigator, Screen, Group } = createStackNavigator();

export function UserRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: theme.COLORS.BACKGROUND,
        },
      }}>
      <Group>
        <Screen name="home" component={Home} />
        <Screen name="pet" component={Pet} />
        <Screen name="petsearch" component={PetSearch} />
        <Screen name="profile" component={Profile} />
      </Group>
    </Navigator>
  );
}
