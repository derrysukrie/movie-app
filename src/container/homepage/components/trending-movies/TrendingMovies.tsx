// Molecul Comp
import MoviesSlider from 'shared/movies-slider/MoviesSlider';

// Atomic Comp
import { TextLarge, TextRegular } from 'components/styled';
import { Block } from 'components/styled/div/Div';
import { Flex } from 'components/styled/layout/Flex';

const images = [
  {
    "color": "purple",
    "type": "minivan",
    "registration": new Date('2012-02-03'),
    "capacity": 7,
    "image": 'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    "color": "purple",
    "type": "minivan",
    "registration": new Date('2012-02-03'),
    "capacity": 7,
    "image": 'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    "color": "purple",
    "type": "minivan",
    "registration": new Date('2012-02-03'),
    "capacity": 7,
    "image": 'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    "color": "purple",
    "type": "minivan",
    "registration": new Date('2012-02-03'),
    "capacity": 7,
    "image": 'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    "color": "purple",
    "type": "minivan",
    "registration": new Date('2012-02-03'),
    "capacity": 7,
    "image": 'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    "color": "purple",
    "type": "minivan",
    "registration": new Date('2012-02-03'),
    "capacity": 7,
    "image": 'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  }
]

function TrendingMovies() {
  return (
    <Block>
      <Block p="20">
        <Flex between center>
          <Block>
            <TextLarge bold>Popular Movies</TextLarge>
          </Block>
          <Block>
            <TextRegular>View all</TextRegular>
          </Block>
        </Flex>
      </Block>
      <Block>
        <MoviesSlider>
          {images.map((res) => (
            <div>
              <img src={res.image} width="200" />
              <div>awdaw</div>
            </div>
          ))}
        </MoviesSlider>
      </Block>
    </Block>
  );
}

export default TrendingMovies;
