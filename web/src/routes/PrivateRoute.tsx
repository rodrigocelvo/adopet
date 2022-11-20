import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

export function PrivateRoute({ children }: { children: JSX.Element }) {
  const { signed } = useAuth();

  return signed ? children : <Navigate to="/signin" />;
}
