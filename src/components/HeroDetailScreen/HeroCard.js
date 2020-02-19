import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, StyleSheet} from 'react-native';

const cardHeight = 150;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    height: 160,
    borderRadius: 6,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    shadowColor: 'rgba(32,39,44,0.5)',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    elevation: 3,
  },
  avator: {
    flex: 1,
    height: cardHeight,
    marginLeft: 10,
  },
  name: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    paddingRight: 10,
    width: 40,
    paddingLeft: 10,
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderLeftColor: '#DDDDDD',
    borderLeftWidth: 1,
    height: 150,
  },
  thumbnail: {
    height: cardHeight,
    width: 150,
    resizeMode: 'cover',
  },
  nameText: {
    fontWeight: 'bold',
  },
});

const HeroCard = ({hero}) => {
  const {root, arrow, avator, name, thumbnail, nameText} = styles;

  const renderHeroAvator = () => (
    <View style={avator}>
      <Image
        source={{uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}`}}
        style={thumbnail}
      />
    </View>
  );

  const renderHeroName = () => (
    <View style={name}>
      <Text style={nameText}>{hero.name}</Text>
    </View>
  );

  const renderArrow = () => (
    <View style={arrow}>
      <Text>{'>'}</Text>
    </View>
  );

  return (
    <View style={root}>
      {renderHeroAvator()}
      {renderHeroName()}
      {renderArrow()}
    </View>
  );
};

HeroCard.propTypes = {
  hero: PropTypes.shape({
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.shape({
      path: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default memo(HeroCard);
