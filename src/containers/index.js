import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ViewHeroesScreen from './ViewHeroesScreen';
import HeroDetailScreen from './HeroDetailScreen';

const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="ViewHeroes">
      <Stack.Screen name="ViewHeroes" component={ViewHeroesScreen} />
      <Stack.Screen name="HeroDetail" component={HeroDetailScreen} />
    </Stack.Navigator>
  );
};

export default MainApp;
