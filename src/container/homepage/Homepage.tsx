import { Block } from "components/styled";
import TrendingMovies from "container/homepage/components/trending-movies/TrendingMovies";

function Homepage() {
  return (
    <Block>
      <Block>
        <TrendingMovies />
      </Block>
    </Block>
  );
}

export default Homepage;
