import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
  },
  emptyContent: {
    marginTop: 20,
    alignItems: 'center',
  },
  cover: {
    width: '100%',
    maxWidth: 200,
    maxHeight: 200,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  coverContaier: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  informationType: {
    fontWeight: 'bold',
  },
  descriptionSection: {
    marginTop: 5,
  },
  creatorSection: {
    marginTop: 5,
  },
});

const ComicDetail = ({comic}) => {
  const {
    root,
    emptyContent,
    cover,
    coverContaier,
    title,
    titleText,
    informationType,
    descriptionSection,
    creatorSection,
  } = styles;

  const renderComicCover = () => (
    <View style={coverContaier}>
      <Image
        source={{uri: `${comic.thumbnail.path}.${comic.thumbnail.extension}`}}
        style={cover}
      />
      <View style={title}>
        <Text style={titleText}>{comic.title}</Text>
      </View>
    </View>
  );

  const renderComicInfo = () => (
    <View style={descriptionSection}>
      <Text>
        <Text style={informationType}>Description: </Text>
        {comic.description}
      </Text>
    </View>
  );

  const renderCreators = () => (
    <View style={creatorSection}>
      <Text>
        <Text style={informationType}>Creator: </Text>
        {comic.creators.items.map(creator => creator.name).join(', ')}
      </Text>
    </View>
  );

  const renderContent = () => {
    if (!comic) {
      return (
        <View style={emptyContent}>
          <Text>please select one comic to view</Text>
        </View>
      );
    }

    return (
      <View style={root}>
        {renderComicCover()}
        {renderComicInfo()}
        {renderCreators()}
      </View>
    );
  };

  return renderContent();
};

export default ComicDetail;
