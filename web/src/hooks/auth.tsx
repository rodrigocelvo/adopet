import { createContext, ReactNode, useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../services/api';

interface UserProps {
  id: string;
  name: string;
  avatar: string;
  token: string;
}

interface UserResponseProps {
  user: {
    sub: string;
    name: string;
    avatar: string;
  };
}

interface AuthProviderProps {
  children: ReactNode;
}

interface SignInProps {
  email: string;
  password: string;
}

export interface AuthContextDataProps {
  user: UserProps;
  isUserLoading: boolean;
  signIn: (login: SignInProps) => Promise<void>;
  logOut: () => Promise<void>;
  signed: boolean;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState(({} as UserProps) || null);
  const [isUserLoading, setIsUserLoading] = useState(true);
  const [token, setToken] = useState('');

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      setIsUserLoading(true);
      const storageUser = localStorage.getItem('@Adopet:user');

      if (!storageUser) {
        // @ts-ignore
        setUser(null);
      }

      if (storageUser) {
        const parsedDate = JSON.parse(storageUser);
        setUser(parsedDate);
      }
    } catch (err) {
      setIsUserLoading(false);
    }
  }

  async function signIn({ email, password }: SignInProps) {
    try {
      setIsUserLoading(true);
      await api
        .post('/login', {
          email,
          password,
        })
        .then(res => {
          setToken(res.data.token);
        });

      const responseToken = await api.get('/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const userData = {
        id: responseToken.data.user.sub,
        name: responseToken.data.user.name,
        avatar: responseToken.data.user.avatar,
        token: token,
      };

      localStorage.setItem('@Adopet:user', JSON.stringify(userData));

      setUser(userData);
    } catch (error) {
      console.log(error);

      throw error;
    } finally {
      setIsUserLoading(false);
    }
  }

  async function logOut() {
    try {
      setIsUserLoading(true);
      localStorage.clear();
      // @ts-ignore
      setUser(null);
      setIsUserLoading(false);
    } catch (error) {
      console.log(error);

      throw error;
    } finally {
      setIsUserLoading(false);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        isUserLoading,
        user,
        logOut,
        signed: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextDataProps {
  const context = useContext(AuthContext);

  return context;
}
