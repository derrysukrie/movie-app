import { Block, TextRegular } from "components/styled";
import { Flex } from "components/styled/layout/Flex";

function TrendingCategories() {
  return (
    <Block>
      <Block pr="20" pl="20" pt="10" pb="10">
        <Flex between center>
          <Block>
            <TextRegular bold>Trending Categories</TextRegular>
          </Block>
        </Flex>
      </Block>
    </Block>
  );
}

export default TrendingCategories;
