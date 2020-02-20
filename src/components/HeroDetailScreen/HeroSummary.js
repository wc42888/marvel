import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import SummaryInfo from './SummaryInfo';
import ExtraInfo from './ExtraInfo';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    margin: 10,
    minHeight: 200,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    shadowColor: 'rgba(32,39,44,0.5)',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    elevation: 3,
  },
  photoContainer: {
    flex: 1,
    padding: 5,
    borderRightColor: '#DDDDDD',
    borderRightWidth: 1,
  },
  photo: {
    flex: 1,
    resizeMode: 'contain',
  },
  summary: {
    flex: 1,
    padding: 5,
  },
});

const HeroSummary = ({hero}) => {
  const {root, photoContainer, photo, summary} = styles;

  const renderPhotoSection = () => (
    <View style={photoContainer}>
      <Image
        source={{uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}`}}
        style={photo}
      />
    </View>
  );

  const renderSummarySection = () => (
    <View style={summary}>
      <SummaryInfo title="Name" info={hero.name} />
      <SummaryInfo title="Description" info={hero.description || 'N/A'} />
      <ExtraInfo hero={hero} />
    </View>
  );

  return (
    <View style={root}>
      {renderPhotoSection()}
      {renderSummarySection()}
    </View>
  );
};

export default HeroSummary;
