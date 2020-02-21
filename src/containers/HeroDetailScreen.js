import React from 'react';
import {connect} from 'react-redux';
import {ScrollView} from 'react-native';
import {
  Header,
  HeroSummary,
  ComicsViewer,
  RelationshipChart,
} from '../components/HeroDetailScreen';
import {getAllHeroComics} from '../redux/actions/comics';
import {useLoadInitialData} from '../utils/hooks';
import {comicsSelect, loadingSelect} from '../selectors';

const HeroDetailScreen = ({
  getAllHeroComics,
  allHeroComics,
  route,
  isRetrivingComics,
}) => {
  const {
    params: {hero},
  } = route;

  useLoadInitialData(() => getAllHeroComics(hero.comics.collectionURI));

  return (
    <ScrollView>
      <Header hero={hero} />
      <HeroSummary hero={hero} />
      <ComicsViewer
        comics={allHeroComics}
        isRetrivingComics={isRetrivingComics}
      />
      <RelationshipChart
        comics={allHeroComics}
        hero={hero}
        isRetrivingComics={isRetrivingComics}
      />
    </ScrollView>
  );
};

const mapStateToProps = (state, props) => ({
  allHeroComics: comicsSelect.getAllComicsForHero(state, props),
  isRetrivingComics: loadingSelect.isRetrivingComics(state),
});

export default connect(
  mapStateToProps,
  {getAllHeroComics},
)(HeroDetailScreen);
