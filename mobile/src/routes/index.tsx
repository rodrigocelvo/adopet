import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './app.routes';
import { UserRoutes } from './user.routes';

export function Routes() {
  const { user } = { user: true };

  return (
    <NavigationContainer>
      {user ? <UserRoutes /> : <AppRoutes />}
    </NavigationContainer>
  );
}
