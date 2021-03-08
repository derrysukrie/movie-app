import React from 'react';
import { ScrollWrapper, Empty } from 'components/styled';

type Props = { children: React.ReactNode };

function MoviesSlider(props: React.PropsWithChildren<Props>) {
  return (
    <ScrollWrapper>
      {props.children}
      <Empty />
    </ScrollWrapper>
  );
}

export default MoviesSlider;
