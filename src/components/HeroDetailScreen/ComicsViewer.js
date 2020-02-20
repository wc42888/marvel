import React, {useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import ComicTitlesList from './ComicTitlesList';
import ComicDetail from './ComicDetail';

const styles = StyleSheet.create({
  root: {
    margin: 5,
    borderWidth: 1,
    borderColor: '#DDDDDD',
  },
  title: {
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
  },
  titleText: {
    fontSize: 24,
  },
  viewer: {
    flexDirection: 'row',
  },
  comicsSelect: {
    flex: 1,
    borderRightColor: '#DDDDDD',
    borderRightWidth: 1,
  },
  comicDetail: {
    flex: 2,
  },
  activityIndicator: {
    marginTop: 5,
  },
});

const ComicsViewer = ({comics, isRetrivingComics}) => {
  const {
    root,
    title,
    titleText,
    viewer,
    comicsSelect,
    comicDetail,
    activityIndicator,
  } = styles;

  const [selectedComicId, setComicId] = useState(null);

  const selectedComic = comics.find(comic => comic.id === selectedComicId);

  const renderTitle = () => (
    <View style={title}>
      <Text style={titleText}>comics</Text>
    </View>
  );

  const renderComicSelect = () => (
    <View style={comicsSelect}>
      <ComicTitlesList
        comics={comics}
        setComicId={setComicId}
        selectedComicId={selectedComicId}
      />
    </View>
  );

  const renderComicDetail = () => (
    <View style={comicDetail}>
      <ComicDetail comic={selectedComic} />
    </View>
  );

  const renderViewer = () => (
    <View style={viewer}>
      {renderComicSelect()}
      {renderComicDetail()}
    </View>
  );

  const renderContent = () => {
    if (isRetrivingComics)
      return (
        <View style={activityIndicator}>
          <ActivityIndicator />
        </View>
      );

    return (
      <View style={root}>
        {renderTitle()}
        {renderViewer()}
      </View>
    );
  };

  return renderContent();
};

export default ComicsViewer;
