import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    marginBottom: 10,
  },
  titleText: {
    color: '#666666',
    fontSize: 12,
  },
  infoContainer: {
    marginLeft: 5,
  },
});

const SummaryInfo = ({title, info}) => {
  const {titleText, root, infoContainer} = styles;
  return (
    <View style={root}>
      <View>
        <Text style={titleText}>{title}</Text>
      </View>
      <View style={infoContainer}>
        <Text>{info}</Text>
      </View>
    </View>
  );
};

export default SummaryInfo;
