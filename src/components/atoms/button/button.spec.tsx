import { Button } from '.'
import { createWithTheme } from '../../../specs/utils'

describe('Atoms/Button', () => {
  test('should match snapshot', () => {
    const component = createWithTheme(<Button>Button</Button>)

    expect(component.toJSON()).toMatchSnapshot()
  })
})
