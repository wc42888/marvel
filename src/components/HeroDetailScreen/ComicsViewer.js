import React, {useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import ComicTitlesList from './ComicTitlesList';
import ComicDetail from './ComicDetail';

const styles = StyleSheet.create({
  root: {
    margin: 5,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: 'rgba(32,39,44,0.5)',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    elevation: 3,
  },
  title: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
  },
  titleText: {
    fontSize: 20,
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

  const renderContent = () =>
    isRetrivingComics ? (
      <View style={activityIndicator}>
        <ActivityIndicator size="large" />
      </View>
    ) : (
      <View style={root}>
        {renderTitle()}
        {renderViewer()}
      </View>
    );

  return renderContent();
};

export default ComicsViewer;
