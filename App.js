import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from './src/screens/ResultsShowScreen';

// CORRECT: createStackNavigator with NO arguments
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Search"
        screenOptions={{
          title: "Business Search",
          headerTitleAlign: 'center'
        }}
      >
        <Stack.Screen name="Search" component={SearchScreen} options={{ title: "Business Search" }} />
        <Stack.Screen name="ResultsShow" component={ResultsShowScreen} options={{ title: "Results" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;