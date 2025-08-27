import { useFonts } from 'expo-font';
import { Stack, usePathname, useRouter } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Menu from '../components/Menu';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    'Raleway': require('../assets/fonts/Raleway-Regular.ttf'),
  });
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    // Map pathname to active tab
    if (pathname === '/') {
      setActiveTab('home');
    } else if (pathname === '/statistics') {
      setActiveTab('statistics');
    } else if (pathname === '/notifications') {
      setActiveTab('notifications');
    } else if (pathname === '/settings') {
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

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="hospital-search" />
        <Stack.Screen name="surgery-timeline" />
        <Stack.Screen name="appointment-orders" />
        <Stack.Screen name="ask-expert" />
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
