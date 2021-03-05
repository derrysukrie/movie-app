import { Block, TextLarge, TextSmall } from 'components/styled';
import { Flex } from 'components/styled/layout/Flex';

function TrendingCategories() {
  return (
    <Block p="20">
      <Block>
        <Flex between center>
          <Block>
            <TextLarge bold>Trending Categories</TextLarge>
          </Block>
        </Flex>
      </Block>
      <Block pt="10">
        <Flex between>
          <Block
            style={{
              width: '48%',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFF',
              backgroundColor: '#ff5953',
              borderRadius: '6px',
            }}
          >
            <TextSmall bold>Action</TextSmall>
          </Block>
          <Block
            style={{
              width: '48%',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFF',
              backgroundColor: '#5ad497',
              borderRadius: '6px',
            }}
          >
            <Block>
              <TextSmall bold>Horror</TextSmall>
            </Block>
          </Block>
        </Flex>
      </Block>
      <Block pt="12">
        <Flex between>
          <Block
            style={{
              width: '48%',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFF',
              backgroundColor: '#55CBD3',
              borderRadius: '6px',
            }}
          >
            <TextSmall bold>Sci-fi</TextSmall>
          </Block>
          <Block
            style={{
              width: '48%',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFF',
              backgroundColor: '#ffcc5c',
              borderRadius: '6px',
            }}
          >
            <Block>
              <TextSmall bold>Adventure</TextSmall>
            </Block>
          </Block>
        </Flex>
      </Block>
    </Block>
  );
}

export default TrendingCategories;
