import React from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
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
    width: 20,
    justifyContent: 'center',
  },
});

const SearchBar = ({searchText, clearSearchText, setSearchText}) => {
  const {root, searchInput, icon} = styles;

  const renderSearchArea = () => (
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      onChangeText={text => setSearchText(text)}
      placeholder="Search your hero"
      value={searchText}
      style={searchInput}
    />
  );

  // can be replaced with fancy icons like rect-native-vector-icon
  const renderIcon = () =>
    searchText ? (
      <TouchableOpacity onPress={clearSearchText}>
        <View style={icon}>
          <Text>x</Text>
        </View>
      </TouchableOpacity>
    ) : null;

  return (
    <View style={root}>
      {renderSearchArea()}
      {renderIcon()}
    </View>
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
