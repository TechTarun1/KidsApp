import * as Sentry from "@sentry/react-native";
import { StatusBar } from 'react-native';
import { StyleSheet, SafeAreaView } from 'react-native';
import BottomNavigation from './navigation/BottomNavigation';
import Congrats from './screens/Congrats';
import Alphabet from './screens/Alphabet';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Level2 from './screens/Level2';
import Level3 from './screens/Level3';
import Level5 from './screens/Level5';
import Level4 from './screens/Level4';

const Stack = createNativeStackNavigator();

export default function App() {

  Sentry.init({
    dsn: "https://2952c72b8b16369a7853a8fd91ffeee7@o4505742530576384.ingest.sentry.io/4505742532608000",
    // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
    // We recommend adjusting this value in production.
    tracesSampleRate: 1.0,
  });

  const statusbarHeight = StatusBar.currentHeight | 0;

  return (
    <SafeAreaView style={{ flex: 1, marginTop: statusbarHeight }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
            headerBackVisible: true,
          }}
        >
          <Stack.Screen
            name={"Main"}
            component={BottomNavigation}
            options={{ headerShown: false, navigationBarColor: 'transparent' }}
          />
          <Stack.Screen
            name={"Congrats"}
            component={Congrats}
            options={{ headerTitle: 'Congrats', headerShown: false }}
          />
          <Stack.Screen
            name={"Alphabet"}
            component={Alphabet}
            options={{ headerShown: false, navigationBarColor: 'transparent' }}
          />
          <Stack.Screen
            name={"Level2"}
            component={Level2}
            options={{ headerShown: false, navigationBarColor: 'transparent' }}
          />
          <Stack.Screen
            name={"Level3"}
            component={Level3}
            options={{ headerShown: false, navigationBarColor: 'transparent' }}
          />
          <Stack.Screen
            name={"Level4"}
            component={Level4}
            options={{ headerShown: false, navigationBarColor: 'transparent' }}
          />
          <Stack.Screen
            name={"Level5"}
            component={Level5}
            options={{ headerShown: false, navigationBarColor: 'transparent' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});