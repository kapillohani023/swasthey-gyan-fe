import { SG_ROUTES } from '@/constants/route';
import {
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_600SemiBold,
  Raleway_700Bold,
} from '@expo-google-fonts/raleway';
import { useFonts } from 'expo-font';
import { Stack, usePathname, useRouter } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Menu from '../components/core/MainMenu';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState('home');

  const [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_500Medium,
    Raleway_600SemiBold,
    Raleway_700Bold,
  });
  
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  useEffect(() => {
    // Map pathname to active tab
    if (pathname === SG_ROUTES.HOME) {
      setActiveTab('home');
    } else if (pathname === SG_ROUTES.STATISTICS) {
      setActiveTab('statistics');
    } else if (pathname === SG_ROUTES.NOTIFICATIONS) {
      setActiveTab('notifications');
    } else if (pathname === SG_ROUTES.SETTINGS) {
      setActiveTab('settings');
    }
  }, [pathname]);

  const handleTabPress = (tabName: string) => {
    setActiveTab(tabName);
    switch (tabName) {
      case 'home':
        router.push('/');
        break;
      case 'statistics':
        router.push('/');
        break;
      case 'notifications': 
        router.push('/');
        break;
      case 'settings':
        router.push('/');
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="hospital-search" />
        <Stack.Screen name="surgery-timeline" />
        <Stack.Screen name="appointments-and-orders" />
        <Stack.Screen name="ask-the-expert" />
      </Stack>
      <Menu activeTab={activeTab} onTabPress={handleTabPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
