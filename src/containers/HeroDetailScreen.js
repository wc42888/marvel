import React from 'react';
import {View, Text} from 'react-native';
import {useLoadInitialData} from '../utils/hooks';

const HeroDetailScreen = () => (
  <View>
    <Text>HeroDetailScreen</Text>
  </View>
);

export default HeroDetailScreen;
  useLoadInitialData(() => getAllHeroComics(hero.comics.collectionURI));
