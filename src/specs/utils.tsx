/* eslint-disable import/no-extraneous-dependencies */
import { mount, render, shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import { light } from '../styles/theme'

const theme = light

export const mountWithTheme = (children: JSX.Element) =>
  mount(<ThemeProvider theme={theme}>{children}</ThemeProvider>)

export const createWithTheme = (children: JSX.Element) =>
  create(<ThemeProvider theme={theme}>{children}</ThemeProvider>)

export const renderWithTheme = (children: JSX.Element) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)

export const shallowWithTheme = (children: JSX.Element) =>
  shallow(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
