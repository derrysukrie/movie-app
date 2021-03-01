import styled from 'styled-components';

const Flex = styled.div<{ between?: boolean, center?: boolean }>`
  display: flex;
  justify-content: ${props => props.between ? 'space-between' : ''};
  align-items: ${props => props.center ? 'center' : ''}
`

export { Flex }