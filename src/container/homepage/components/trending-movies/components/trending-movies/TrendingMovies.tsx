import React from 'react';
// Molecul Comp
import MoviesSlider from 'shared/movies-slider/MoviesSlider';

// Atomic Comp
import { TextRegular } from 'components/styled';
import { Block } from 'components/styled/div/Div';
import { Flex } from 'components/styled/layout/Flex';

const images = [
  {
    color: 'purple',
    type: 'minivan',
    registration: new Date('2012-02-03'),
    capacity: 7,
    image: 'https://i.pinimg.com/originals/b2/09/0d/b2090d1ae0c016943371b6c01dddcf08.jpg',
  },
  {
    color: 'purple',
    type: 'minivan',
    registration: new Date('2012-02-03'),
    capacity: 7,
    image: 'https://www.joblo.com/assets/images/oldsite/newsimages1/venom-poster-6-913.jpg',
  },
  {
    color: 'purple',
    type: 'minivan',
    registration: new Date('2012-02-03'),
    capacity: 7,
    image: 'https://www.teahub.io/photos/full/73-732124_uri-movie-poster-hd.jpg',
  },
  {
    color: 'purple',
    type: 'minivan',
    registration: new Date('2012-02-03'),
    capacity: 7,
    image: 'https://www.wallpapertip.com/wmimgs/75-752949_john-wick-movie-poster.jpg',
  },
  {
    color: 'purple',
    type: 'minivan',
    registration: new Date('2012-02-03'),
    capacity: 7,
    image:
      'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
];

function TrendingMovies() {
  return (
    <Block>
      <Block pr="20" pl="20" pt="30" pb="10">
        <Flex between center>
          <Block>
            <TextRegular bold>Popular Movies</TextRegular>
          </Block>
        </Flex>
      </Block>
      <Block>
        <MoviesSlider>
          {React.Children.toArray(
            images.map((res) => (
              <div>
                <img
                  src={res.image}
                  width="300"
                  alt="image poster, gambar"
                  height="160"
                  style={{ objectFit: 'cover', borderRadius: '10px' }}
                />
              </div>
            ))
          )}
        </MoviesSlider>
      </Block>
    </Block>
  );
}

export default TrendingMovies;
