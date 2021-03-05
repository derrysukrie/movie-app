import Header from "components/header/Header";
import { Block } from "components/styled";
import TrendingMovies from "container/homepage/components/trending-movies/components/trending-movies/TrendingMovies";
import TrendingCategories from "./components/trending-movies/components/trending-categories/Trendingcategories";

function Homepage() {
  return (
    <Block>
      {/* <Block>
        <Header />
      </Block> */}
      <TrendingMovies />
      <TrendingCategories />
    </Block>
  );
}

export default Homepage;
