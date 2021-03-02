import styled from 'styled-components';

const Block = styled.div<{p?: string, pt?: string, pb?: string}>`
  padding: ${props => props.p ? `${props.p}px` : ''};
  padding-top: ${props => props.pt ? `${props.pt}px` : ''};
  padding-bottom: ${props => props.pb? `${props.pb}px` : ''};
`
export { Block };