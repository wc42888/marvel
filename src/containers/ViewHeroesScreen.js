import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {getMarvelHero} from '../redux/actions/marvelHeros';
import {marvelHeroesSelect} from '../selectors';

const ViewHeroesScreen = ({getMarvelHero, allMarvelHeroes}) => {
  useEffect(() => {
    (async function anyNameFunction() {
      await getMarvelHero();
    })();

    //  disable the role because the fetch function only runs once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <Text>hello world</Text>
    </View>
  );
};

ViewHeroesScreen.propTypes = {
  getMarvelHero: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  allMarvelHeroes: marvelHeroesSelect.selectAllMarvelHeroes(state),
});

export default connect(
  mapStateToProps,
  {
    getMarvelHero,
  },
)(ViewHeroesScreen);
