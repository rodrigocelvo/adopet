import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['onAnimatedValueUpdate', 'Could not find image', 'GO_BACK']);

import { ThemeProvider } from 'styled-components';
import { AuthContextProvider } from './src/hooks/useAuth';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import { Routes } from './src/routes';
import { Loading } from './src/components/Loading';

import themes from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  const deviceTheme = useColorScheme();
  let theme;

  deviceTheme === 'light' ? (theme = themes.light) : (theme = themes.dark);

  return (
    <AuthContextProvider>
      <StatusBar
        barStyle={deviceTheme === 'light' ? 'dark-content' : 'light-content'}
        backgroundColor="transparent"
        translucent
      />
      <SafeAreaProvider>
        <SafeAreaView
          style={{
            backgroundColor: `${deviceTheme === 'light' ? 'white' : 'black'}`,
            flex: 1,
          }}>
          <ThemeProvider theme={theme}>
            {fontsLoaded ? <Routes /> : <Loading />}
          </ThemeProvider>
        </SafeAreaView>
      </SafeAreaProvider>
    </AuthContextProvider>
  );
}
