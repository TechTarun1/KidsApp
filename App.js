import { StatusBar } from 'react-native';
import { StyleSheet, SafeAreaView } from 'react-native';
import BottomNavigation from './navigation/BottomNavigation';
import Congrats from './screens/Congrats';
import Alphabet from './screens/Alphabet';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

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