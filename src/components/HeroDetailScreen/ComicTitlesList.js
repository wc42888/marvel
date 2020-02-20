import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  separator: {
    borderWidth: 0.5,
    borderColor: '#DDDDDD',
  },
  emptyList: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  comicTitleContainer: {
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  comicTitle: {
    textAlign: 'center',
  },
  selectedText: {
    color: 'white',
  },
  selectedTextContainer: {
    backgroundColor: 'grey',
  },
});

const ComicTitlesList = ({comics, setComicId, selectedComicId}) => {
  const keyExtractor = item => `${item.id}`;

  const {
    separator,
    emptyList,
    comicTitleContainer,
    comicTitle,
    selectedTextContainer,
    selectedText,
  } = styles;

  const ListEmptyComponent = () => (
    <View style={emptyList}>
      <Text>no comic available, please try refresh</Text>
    </View>
  );

  const isSelectedComic = comic => comic.id === selectedComicId;

  const getSelectedContainerStyle = item =>
    isSelectedComic(item) ? selectedTextContainer : {};

  const getSelectedTextStyle = item =>
    isSelectedComic(item) ? selectedText : {};

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => setComicId(item.id)}>
      <View style={[comicTitleContainer, getSelectedContainerStyle(item)]}>
        <Text style={[comicTitle, getSelectedTextStyle(item)]}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const ItemSeparatorComponent = () => <View style={separator} />;

  return (
    <FlatList
      ItemSeparatorComponent={ItemSeparatorComponent}
      ListEmptyComponent={ListEmptyComponent}
      keyExtractor={keyExtractor}
      data={comics}
      renderItem={renderItem}
    />
  );
};

export default ComicTitlesList;
