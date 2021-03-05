import { TextLarge, TextSmall } from 'components/styled';
import { Block } from 'components/styled/div/Div';
import { Flex } from 'components/styled/layout/Flex';

function Header() {
  return (
    <Block p="20">
      <Flex between center>
        <Block>
          <Flex column>
            <Block>
              <TextLarge bold>Hello Derry</TextLarge>
            </Block>
            <Block>
              <TextSmall color="9C9C9C" bold>
                Let's explore your favorite movies
              </TextSmall>
            </Block>
          </Flex>
        </Block>
        <Block>
          <img
            src="https://placeimg.com/640/480/people"
            width="50"
            height="50"
            alt="..."
            style={{ borderRadius: '50%' }}
          />
        </Block>
      </Flex>
    </Block>
  );
}

export default Header;
