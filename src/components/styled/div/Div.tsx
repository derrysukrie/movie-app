import styled from 'styled-components';

const Block = styled.div<{ p?: string, pt?: string, pb?: string, pl?: string, pr?: string }>`
  padding: ${props => props.p ? `${props.p}px` : ''};
  padding-top: ${props => props.pt ? `${props.pt}px` : ''};
  padding-bottom: ${props => props.pb ? `${props.pb}px` : ''};
  padding-left:${props => props.pl ? `${props.pl}px` : ''};
  padding-right:${props => props.pr ? `${props.pr}px` : ''};
`

export { Block };