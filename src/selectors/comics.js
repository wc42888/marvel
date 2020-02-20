import {createSelector} from 'reselect';

const getAllComicNames = (state, props) => {
  const {
    route: {
      params: {
        hero: {
          comics: {items},
        },
      },
    },
  } = props;
  return items.map(comic => comic.name);
};

const getAllComics = state => state.comics;

export const getAllComicsForHero = createSelector(
  [getAllComicNames, getAllComics],
  (allComicNames, allComics) =>
    allComics.filter(comic =>
      allComicNames.some(comicName => comic.title === comicName),
    ),
);
