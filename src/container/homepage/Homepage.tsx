import { Block } from 'components/styled';
import { useEffect } from 'react';
// import ShowingNow from './_components/showing-now/ShowingNow';
import TrendingCategories from './_components/trending-categories/TrendingCategories';
import TVShows from './_components/tv-shows/TVshows';

function Homepage() {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1');
  }, []);

  return (
    <Block>
      {/* <Block>
        <Header />
      </Block> */}
      {/* <ShowingNow /> */}
      <TrendingCategories />
      <TVShows />
    </Block>
  );
}

export default Homepage;
