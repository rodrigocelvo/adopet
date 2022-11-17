import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './app.routes';
import { UserRoutes } from './user.routes';
import { useAuth } from '../hooks/useAuth';

export function Routes() {
  const { signed } = useAuth();

  return (
    <NavigationContainer>
      {signed ? <UserRoutes /> : <AppRoutes />}
    </NavigationContainer>
  );
}
