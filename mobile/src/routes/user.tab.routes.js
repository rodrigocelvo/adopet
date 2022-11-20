import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import { ifIphoneX, getStatusBarHeight } from 'react-native-iphone-x-helper';

import { useTheme } from 'styled-components';

import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { Favorites } from '../pages/Favorites';
import { MyPets } from '../pages/MyPets';

import { PawPrint, Heart, User, Dog } from 'phosphor-react-native';

const { Navigator, Screen } = createBottomTabNavigator();

export function UserBottomTabRoutes() {
  const THEME = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        transparentCard: true,
        tabBarShowLabel: false,
        tabBarLabelPosition: 'beside-icon',
        tabBarActiveTintColor: THEME.COLORS.PRIMARY_500,
        tabBarStyle: {
          position: 'absolute',
          height: getStatusBarHeight() + 40,
          backgroundColor: THEME.COLORS.BORDER,
          borderTopColor: THEME.COLORS.BORDER,
          borderTopWidth: 0,
        },
        tabBarIconStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },

        tabBarItemStyle: {
          position: 'relative',
          top: Platform.OS === 'android' ? -10 : 0,

          ...ifIphoneX(
            {
              paddingTop: 25,
            },
            {
              paddingTop: 10,
            },
          ),
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
        component={Favorites}
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
        name="mypets"
        component={MyPets}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Dog
              weight={focused ? 'fill' : 'regular'}
              color={color}
              size={24}
            />
          ),
          tabBarLabel: 'Meus Pets',
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
