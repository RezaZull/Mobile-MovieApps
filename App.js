
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import Bookmark from './src/screens/Bookmark';
import Profile from './src/screens/Profile';

const Stack = createNativeStackNavigator();
const Footer = createBottomTabNavigator();

const FooterMenu = () => {
  return (
    <Footer.Navigator initialRouteName='Home' >
      <Footer.Screen
        name='Bookmark'
        component={Bookmark}
        options={{tabBarIconStyle:{'display':'none'} }}
      />
      <Footer.Screen
        name='Home'
        component={HomeScreen}
        options={{tabBarIconStyle:{'display':'none'} }}
      />
      <Footer.Screen
        name='Account'
        component={Profile}
        options={{tabBarIconStyle:{'display':'none'} }}
      />
    </Footer.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='home'
          component={FooterMenu}
        options={{ headerShown:false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
