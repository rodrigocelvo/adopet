import { Navigate } from 'react-router-dom';

export function PrivateRoute({ children }: { children: JSX.Element }) {
  const user = true;

  return user ? children : <Navigate to="/signin" />;
}
