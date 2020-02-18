import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import {getMarvelHero} from '../redux/actions/marvelHeros';

const Test = ({getMarvelHero}) => {
  useEffect(() => {
    (async function anyNameFunction() {
      await getMarvelHero();
    })();
  }, []);
  return (
    <View>
      <Text>hello world</Text>
    </View>
  );
};

export default connect(
  null,
  {
    getMarvelHero,
  },
)(Test);
