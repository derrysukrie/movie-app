import styled from 'styled-components';

const ScrollWrapper = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto;
  grid-gap: 0 14px;
  padding: 0px 20px 20px;
  padding-right: 0;
  margin: 0 auto;
`

const Empty = styled.div`
  width: 5px;
`

export {
  ScrollWrapper,
  Empty,
};
