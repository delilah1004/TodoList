import React from 'react';
import MainPage from './pages/MainPage';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  NotoSansKR_500Medium,
  Gaegu_300Light,
  Gaegu_400Regular,
  Gaegu_700Bold,
  Sunflower_300Light,
  Sunflower_500Medium,
  Sunflower_700Bold 
} from '@expo-google-fonts/dev';

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    NotoSansKR_500Medium,
    Gaegu_300Light,
    Gaegu_400Regular,
    Gaegu_700Bold,
    Sunflower_300Light,
    Sunflower_500Medium,
    Sunflower_700Bold 
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (<MainPage/>);
  }
}