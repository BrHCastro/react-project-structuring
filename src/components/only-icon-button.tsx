import styled from 'styled-components'

export const OnlyIconButton = styled.button`
  margin: 0;
  padding: 0;
  background: none;
  border: none;

  span {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`
