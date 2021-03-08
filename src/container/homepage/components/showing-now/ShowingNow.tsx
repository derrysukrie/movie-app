import React from 'react';
// Molecul Comp
import MoviesSlider from 'shared/movies-slider/MoviesSlider';

// Atomic Comp
import { TextLarge, TextRegular } from 'components/styled';
import { Block } from 'components/styled/div/Div';
import { Flex } from 'components/styled/layout/Flex';

const images = [
  {
    color: 'purple',
    type: 'minivan',
    registration: new Date('2012-02-03'),
    capacity: 7,
    image: 'https://i.pinimg.com/originals/b2/09/0d/b2090d1ae0c016943371b6c01dddcf08.jpg',
    title: 'Avengers: Age of Ultron',
  },
  {
    color: 'purple',
    type: 'minivan',
    registration: new Date('2012-02-03'),
    capacity: 7,
    image: 'https://www.joblo.com/assets/images/oldsite/newsimages1/venom-poster-6-913.jpg',
    title: 'Avengers: Age of Ultron',
  },
  {
    color: 'purple',
    type: 'minivan',
    registration: new Date('2012-02-03'),
    capacity: 7,
    image: 'https://www.teahub.io/photos/full/73-732124_uri-movie-poster-hd.jpg',
    title: 'Avengers: Age of Ultron',
  },
  {
    color: 'purple',
    type: 'minivan',
    registration: new Date('2012-02-03'),
    capacity: 7,
    image: 'https://www.wallpapertip.com/wmimgs/75-752949_john-wick-movie-poster.jpg',
    title: 'Avengers: Age of Ultron',
  },
  {
    color: 'purple',
    type: 'minivan',
    registration: new Date('2012-02-03'),
    capacity: 7,
    image:
      'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Avengers: Age of Ultron',
  },
];

function ShowingNow() {
  return (
    <Block>
      <Block pr="20" pl="20" pt="30" pb="10">
        <Flex between center>
          <Block>
            <TextLarge bold>Now Playing</TextLarge>
          </Block>
        </Flex>
      </Block>
      <Block>
        <MoviesSlider>
          {React.Children.toArray(
            images.map((res) => (
              <div style={{ position: 'relative' }}>
                <img
                  src={res.image}
                  width="300"
                  alt="poster, gambar"
                  height="160"
                  style={{
                    objectFit: 'cover',
                    borderRadius: '10px',
                  }}
                />
                <Block style={{ position: 'absolute', bottom: '14px', left: '14px' }}>
                  <TextRegular bold color="FFF">
                    {res.title}
                  </TextRegular>
                </Block>
              </div>
            )),
          )}
        </MoviesSlider>
      </Block>
    </Block>
  );
}

export default ShowingNow;
