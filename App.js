import React from 'react';
import MainPage from './pages/MainPage';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Montserrat_100Thin,
  MontserratSubrayada_400Regular
} from '@expo-google-fonts/dev';

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    MontserratSubrayada_400Regular
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (<MainPage/>);
  }
}