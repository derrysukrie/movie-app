import { Block, TextLarge } from 'components/styled';
import { Flex } from 'components/styled/layout/Flex';

function TVShows() {
  return (
    <Block p="20">
      <Block>
        <Flex between center>
          <Block>
            <TextLarge bold>Top Rated TV Shows</TextLarge>
          </Block>
        </Flex>
      </Block>
    </Block>
  );
}

export default TVShows;
