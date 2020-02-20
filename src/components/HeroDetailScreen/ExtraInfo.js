import React from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';
import {BLUE} from '../Shared/color';

const styles = StyleSheet.create({
  titleText: {
    color: '#666666',
    fontSize: 12,
  },
  linkContainer: {
    flexDirection: 'row',
  },
  link: {
    color: BLUE,
    marginLeft: 5,
  },
});

const ExtraInfo = ({hero}) => {
  const {titleText, link, linkContainer} = styles;

  const openLink = url => Linking.openURL(url);

  const renderExtraInfo = () =>
    hero.urls.map(url => {
      return (
        <Text key={url.type} style={link} onPress={() => openLink(url.url)}>
          {url.type}
        </Text>
      );
    });

  return (
    <View>
      <View>
        <Text style={titleText}>Extra</Text>
      </View>
      <View style={linkContainer}>{renderExtraInfo()}</View>
    </View>
  );
};

export default ExtraInfo;
