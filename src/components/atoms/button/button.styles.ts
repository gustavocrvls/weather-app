import styled from 'styled-components'
import { IContainer } from './button.dto'

export const Container = styled.button<IContainer>`
  background-color: ${props => props.theme.colors[props.color || 'primary']};
  color: ${props => props.theme.typography.primary};
  padding: 10px 16px;
  border: 0;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`
