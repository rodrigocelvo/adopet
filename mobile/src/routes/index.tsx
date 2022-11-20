import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { AppRoutes } from './app.routes';
import { UserStackRoutes } from './user.stack.routes';
import { useAuth } from '../hooks/auth';
import { useTheme } from 'styled-components';

export function Routes() {
  const { signed } = useAuth();
  const THEME = useTheme();

  const navTheme = DefaultTheme;

  navTheme.colors.background = THEME.COLORS.BACKGROUND;

  return (
    <NavigationContainer theme={navTheme}>
      {signed ? <UserStackRoutes /> : <AppRoutes />}
    </NavigationContainer>
  );
}
