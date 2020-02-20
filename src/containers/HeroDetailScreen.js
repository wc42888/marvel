import React from 'react';
import {View, Text} from 'react-native';
import {useLoadInitialData} from '../utils/hooks';
import {comicsSelect} from '../selectors';

const HeroDetailScreen = () => (
  <View>
    <Text>HeroDetailScreen</Text>
  </View>
);

export default HeroDetailScreen;
  useLoadInitialData(() => getAllHeroComics(hero.comics.collectionURI));
const mapStateToProps = (state, props) => ({
  allHeroComics: comicsSelect.getAllComicsForHero(state, props),
});
  mapStateToProps,
