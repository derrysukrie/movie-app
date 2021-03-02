import styled from 'styled-components';

const TextLarge = styled.span<{bold?: boolean}>`
  font-size: 16px;
  font-weight: ${props => props.bold ? '700' : ''}
`

export { TextLarge }