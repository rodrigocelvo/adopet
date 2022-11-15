import { createContext, ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../services/api';

interface UserProps {
  id: string;
  name: string;
  avatar: string;
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
  signUp: () => Promise<void>;
  signed: boolean;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState(({} as UserProps) || null);
  const [isUserLoading, setIsUserLoading] = useState(false);

  useEffect(() => {
    async function getUser() {
      const storageUser = localStorage.getItem('@Adopet:user');

      if (!storageUser) {
        // @ts-ignore
        setUser(null);
      }

      if (storageUser) {
        const parsedDate = JSON.parse(storageUser);
        setUser(parsedDate);
      }
    }
    getUser();
  }, []);

  async function signIn({ id }: SignInProps) {
    setIsUserLoading(true);

    try {
      const response = await api.post('/me', {
        id,
      });

      const responseData: UserProps = response.data;

      const userData = {
        id: responseData.id,
        name: responseData.name,
        avatar: responseData.avatar,
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

  async function signUp() {
    setIsUserLoading(true);
    try {
      localStorage.clear();
      // @ts-ignore
      setUser(null);
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
        signUp,
        signed: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
