import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useContext,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '../services/api';

interface UserProps {
  id: string;
  name: string;
  avatar: string;
}
interface ResponseUserProps {
  data: UserProps;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface SignInProps {
  id: string;
}

export interface AuthContextDataProps {
  user: UserProps;
  isUserLoading: boolean;
  signIn: (id: SignInProps) => Promise<void>;
  logOut: () => Promise<void>;
  updateUser: (id: string) => Promise<void>;
  signed: boolean;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState(({} as UserProps) || null);
  const [isUserLoading, setIsUserLoading] = useState(true);

  useEffect(() => {
    getUser();
  }, [user]);

  async function getUser() {
    try {
      setIsUserLoading(true);
      const storageUser = await AsyncStorage.getItem('@Adopet:user');

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

  async function signIn({ id }: SignInProps) {
    try {
      setIsUserLoading(true);
      const response: ResponseUserProps = await api.post('/me', {
        id,
      });

      const userData = {
        id: response.data.id,
        name: response.data.name,
        avatar: response.data.avatar,
      };

      await AsyncStorage.setItem('@Adopet:user', JSON.stringify(userData));

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
      AsyncStorage.clear();
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

  async function updateUser(id: string) {
    try {
      setIsUserLoading(true);
      const response: ResponseUserProps = await api.post('/me', {
        id,
      });

      const fakeData = {
        id: response.data.id,
        name: response.data.name,
        avatar: 'image.png',
      };

      setUser(fakeData);

      const userData = {
        id: response.data.id,
        name: response.data.name,
        avatar: response.data.avatar,
      };

      await AsyncStorage.setItem('@Adopet:user', JSON.stringify(userData));

      setUser(userData);
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
        updateUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextDataProps {
  const context = useContext(AuthContext);

  return context;
}
