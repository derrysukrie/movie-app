import styled from 'styled-components';

const Block = styled.div<{ p?: string; pt?: string; pb?: string; pl?: string; pr?: string }>`
  padding: ${(props) => props.p && props.p};
  padding-top: ${(props) => props.pt && props.pt};
  padding-bottom: ${(props) => props.pb && props.pb};
  padding-left: ${(props) => props.pl && props.pl};
  padding-right: ${(props) => props.pr && props.pr};
`;

export default Block;
