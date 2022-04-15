import { ReactNode } from 'react'
import { Container } from './button.styles'
import { IContainer } from './button.dto'

export interface IButton extends IContainer {
  children: ReactNode
}

export const Button = ({ children, ...args }: IButton) => (
  <Container {...args}>{children}</Container>
)
