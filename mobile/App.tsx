import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { ThemeProvider } from 'styled-components';

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

  deviceTheme === 'dark' ? (theme = themes.dark) : (theme = themes.light);

  return (
    <>
      <StatusBar barStyle="light-content" translucent />
      <SafeAreaProvider>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: '#5AA9EF',
          }}>
          <ThemeProvider theme={theme}>
            {fontsLoaded ? <Routes /> : <Loading />}
          </ThemeProvider>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
