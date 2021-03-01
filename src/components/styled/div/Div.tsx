import styled from 'styled-components';

const Block = styled.div<{p?: string, pt?: string}>`
  padding: ${props => props.p ? `${props.p}px` : ''};
  padding-top: ${props => props.pt ? `${props.pt}px` : ''};
`
export { Block };