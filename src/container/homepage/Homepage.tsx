import { Block } from 'components/styled';
import ShowingNow from './components/showing-now/ShowingNow';
import TrendingCategories from './components/trending-categories/TrendingCategories';
import TVShows from './components/tv-shows/TVshows';

function Homepage() {
  return (
    <Block>
      <ShowingNow />
      <TrendingCategories />
      <TVShows />
    </Block>
  );
}

export default Homepage;
