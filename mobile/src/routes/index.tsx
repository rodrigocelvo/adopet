import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './app.routes';
import { UserStackRoutes } from './user.stack.routes';
import { useAuth } from '../hooks/useAuth';

export function Routes() {
  const { signed } = useAuth();

  return (
    <NavigationContainer>
      {signed ? <UserStackRoutes /> : <AppRoutes />}
    </NavigationContainer>
  );
}
