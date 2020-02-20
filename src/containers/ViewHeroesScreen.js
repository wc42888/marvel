import React, {useState} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {getMarvelHero} from '../redux/actions/marvelHeros';
import {SearchBar, HeroList} from '../components/ViewHeroesScreen';
import {marvelHeroesSelect, loadingSelect} from '../selectors';
import {useLoadInitialData} from '../utils/hooks';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

const ViewHeroesScreen = ({
  getMarvelHero,
  isRetrivingHeroes,
  allMarvelHeroes,
}) => {
  const [searchText, setSearchText] = useState(null);

  const clearSearchText = () => setSearchText(null);

  useLoadInitialData(getMarvelHero);

  const {root} = styles;

  return (
    <View style={root}>
      <SearchBar
        clearSearchText={clearSearchText}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <HeroList
        searchText={searchText}
        allHeroes={allMarvelHeroes}
        isRetrivingHeroes={isRetrivingHeroes}
        getMarvelHero={getMarvelHero}
      />
    </View>
  );
};

ViewHeroesScreen.propTypes = {
  getMarvelHero: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  allMarvelHeroes: marvelHeroesSelect.selectAllMarvelHeroes(state),
  isRetrivingHeroes: loadingSelect.isRetrivingHeroes(state),
});

export default connect(
  mapStateToProps,
  {
    getMarvelHero,
  },
)(ViewHeroesScreen);
