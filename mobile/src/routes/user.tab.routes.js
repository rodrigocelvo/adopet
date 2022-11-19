import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme, Platform } from 'react-native';

import { useTheme } from 'styled-components';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { PawPrint, Heart, User, Pet } from 'phosphor-react-native';

const { Navigator, Screen } = createBottomTabNavigator();

export function UserBottomTabRoutes() {
  const THEME = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        transparentCard: true,
        tabBarLabelPosition: 'beside-icon',
        tabBarShowLabel: false,
        tabBarActiveTintColor: THEME.COLORS.PRIMARY_500,
        tabBarStyle: {
          position: 'absolute',
          height: 64,
          backgroundColor: THEME.COLORS.BORDER,
          borderTopColor: THEME.COLORS.BORDER,
          borderTopWidth: 0,
        },
        tabBarItemStyle: {
          position: 'relative',
          top: Platform.OS === 'android' ? -10 : 0,
        },
      }}>
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <PawPrint
              weight={focused ? 'fill' : 'regular'}
              color={color}
              size={24}
            />
          ),
          tabBarLabel: 'Adotar',
        }}
      />
      <Screen
        name="favorites"
        component={Profile}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Heart
              weight={focused ? 'fill' : 'regular'}
              color={color}
              size={24}
            />
          ),
          tabBarLabel: 'Favoritos',
        }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <User
              weight={focused ? 'fill' : 'regular'}
              color={color}
              size={24}
            />
          ),
          tabBarLabel: 'Perfil',
        }}
      />
    </Navigator>
  );
}
