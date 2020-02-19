import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
  },
  goBackText: {
    color: '#335EFF',
  },
  section: {
    flex: 1,
  },
  name: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameText: {
    textAlign: 'center',
  },
});

const Header = ({hero}) => {
  const {root, section, name, goBackText, nameText} = styles;

  const navigation = useNavigation();

  const goBackToHeroList = () => navigation.goBack();

  return (
    <View style={root}>
      <View style={section}>
        <TouchableOpacity onPress={goBackToHeroList}>
          <>
            <Text style={goBackText}>Go back</Text>
          </>
        </TouchableOpacity>
      </View>
      <View style={[section, name]}>
        <Text style={nameText}>{hero.name}</Text>
      </View>
      <View style={section} />
    </View>
  );
};

Header.propTypes = {
  hero: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Header;
