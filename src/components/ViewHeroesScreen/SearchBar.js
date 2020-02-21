import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
} from 'react-native';
import PropTypes from 'prop-types';
import {BLUE} from '../Shared/color';

const INITAL_BORDER_COLOR = 'rgb(204,204,204)';
const ACTIVE_BORDER_COLOR = 'rgba(51,94,255,1)';

const ANIMATION_DURATION = 300;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    borderColor: INITAL_BORDER_COLOR,
    //  borderWidth: 1,
    borderRadius: 20,
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    left: 10,
  },
  icon: {
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearText: {
    color: BLUE,
  },
});

const SearchBar = ({searchText, clearSearchText, setSearchText}) => {
  const {root, searchInput, icon, clearText} = styles;

  const [searchBarAnimate] = useState(new Animated.Value(0));

  const fadeIn = () => {
    Animated.timing(searchBarAnimate, {
      toValue: 1,
      duration: ANIMATION_DURATION,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(searchBarAnimate, {
      toValue: 0,
      duration: ANIMATION_DURATION,
    }).start();
  };

  const fadeInBorderStyle = {
    borderColor: searchBarAnimate.interpolate({
      inputRange: [0, 1],
      outputRange: [INITAL_BORDER_COLOR, ACTIVE_BORDER_COLOR],
    }),
    transform: [
      {
        scale: searchBarAnimate.interpolate({
          inputRange: [0, 0.3, 1],
          outputRange: [1, 1.05, 1],
        }),
      },
    ],
    borderWidth: searchBarAnimate.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 2],
    }),
  };

  const renderSearchArea = () => (
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      onChangeText={text => setSearchText(text)}
      placeholder="Search your hero"
      value={searchText}
      style={searchInput}
      onFocus={fadeIn}
      onBlur={fadeOut}
    />
  );

  // can be replaced with fancy icons like rect-native-vector-icon
  const renderIcon = () =>
    searchText ? (
      <TouchableOpacity onPress={clearSearchText}>
        <View style={icon}>
          <Text style={clearText}>clear</Text>
        </View>
      </TouchableOpacity>
    ) : null;

  return (
    <Animated.View style={[root, fadeInBorderStyle]}>
      {renderSearchArea()}
      {renderIcon()}
    </Animated.View>
  );
};

SearchBar.defaultProps = {
  searchText: null,
};

SearchBar.propTypes = {
  clearSearchText: PropTypes.func.isRequired,
  searchText: PropTypes.string,
  setSearchText: PropTypes.func.isRequired,
};

export default SearchBar;
