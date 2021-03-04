import styled from 'styled-components';

const TextRegular = styled.span<{bold?: boolean, cursor?: boolean}>`
  font-size: 14px;
  font-weight: ${props => props.bold ? '700' : ''};
  cursor: ${props => props.cursor ? 'pointer' : null};
`

export { TextRegular }