import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useContext,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '../services/api';
import { Alert } from 'react-native';

interface UserProps {
  token: string;
  user: {
    sub: string;
    name: string;
    avatar: string | null;
  };
}
interface ResponseUserProps {
  data: UserProps;
}

interface ResponseUpdateProps {
  data: {
    id: string;
    name: string;
    avatarUrl: string;
  };
}

interface UserPropsData {
  id: string;
  name: string;
  avatarUrl: string | null;
  token: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface SignInProps {
  email: string;
  password: string;
}

export interface AuthContextDataProps {
  user: UserPropsData;
  isUserLoading: boolean;
  signIn: (id: SignInProps) => Promise<void>;
  logOut: () => Promise<void>;
  updateUser: (id: string) => Promise<void>;
  signed: boolean;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState(({} as UserPropsData) || null);
  const [isUserLoading, setIsUserLoading] = useState(true);
  const [token, setToken] = useState('');

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

  async function signIn({ email, password }: SignInProps) {
    try {
      setIsUserLoading(true);

      await api
        .post('/login', {
          email,
          password,
        })
        .then(async res => {
          const response: ResponseUserProps = await api.get('/me', {
            headers: {
              Authorization: `Bearer ${res.data.token}`,
            },
          });

          const userData: UserPropsData = {
            id: response.data.user.sub,
            name: response.data.user.name,
            avatarUrl: response.data.user.avatar,
            token: res.data.token,
          };

          await AsyncStorage.setItem('@Adopet:user', JSON.stringify(userData));

          setUser(userData);

          setToken(res.data.token);
        })
        .catch(err => {
          Alert.alert(
            'Erro!',
            `Não foi possível realizar o login, tente novamente.`,
          );
          return;
        });
    } catch (error) {
      console.log(error);

      throw error;
    } finally {
      setIsUserLoading(false);
    }
  }

  async function logOut() {
    try {
      const storageUser: any = await AsyncStorage.getItem('@Adopet:user');

      const parsedDate = JSON.parse(storageUser);

      await api
        .post('/revoketoken', {
          headers: {
            Authorization: `Bearer ${parsedDate.token}`,
          },
        })
        .then()
        .catch(error => {});

      setToken('');

      setIsUserLoading(true);
      AsyncStorage.clear();
      // @ts-ignore
      setUser(null);
      setIsUserLoading(false);

      setToken('');

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

  async function updateUser(userId: string) {
    try {
      setIsUserLoading(true);
      const response: ResponseUpdateProps = await api.get(`/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      const userData = {
        id: response.data.id,
        name: response.data.name,
        avatarUrl: response.data.avatarUrl,
        token: token,
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
