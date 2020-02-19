import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';
import HeroCard from './HeroCard';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    marginTop: 28,
  },
  separator: {
    height: 20,
  },
  emptyList: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const HeroList = ({
  allHeroes,
  isRetrivingHeroes,
  getMarvelHero,
  searchText,
}) => {
  const {root, separator, emptyList} = styles;

  const ListEmptyComponent = () => (
    <View style={emptyList}>
      <Text>No hero information available, please try refresh</Text>
    </View>
  );

  const ItemSeparatorComponent = () => <View style={separator} />;

  const keyExtractor = item => `${item.id}`;

  const renderItem = ({item}) => <HeroCard hero={item} />;

  const onRefresh = () => getMarvelHero();

  const getData = heroes => {
    if (!searchText) return heroes;
    return heroes.filter(hero => {
      console.log('searchText', searchText);
      if (!hero.name) return false;
      return hero.name.toUpperCase().includes(searchText.toUpperCase());
    });
  };

  const renderHerolist = () => (
    <FlatList
      ItemSeparatorComponent={ItemSeparatorComponent}
      ListEmptyComponent={ListEmptyComponent}
      data={getData(allHeroes)}
      initialNumToRender={10}
      keyExtractor={keyExtractor}
      refreshing={isRetrivingHeroes}
      onRefresh={onRefresh}
      renderItem={renderItem}
    />
  );

  return <View style={root}>{renderHerolist()}</View>;
};

HeroList.defaultProps = {
  searchText: '',
  allMarvelHeroes: [],
  loading: {
    GET_MARVEL_HERO: false,
  },
};

HeroList.propTypes = {
  allMarvelHeroes: PropTypes.PropTypes.array,
  isRetrivingHeroes: PropTypes.bool.isRequired,
  searchText: PropTypes.string,
  getMarvelHero: PropTypes.func.isRequired,
};

export default HeroList;
