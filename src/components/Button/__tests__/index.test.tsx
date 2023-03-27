import { render, screen } from '@/test/utils'
import { Button } from '..'

describe('Button Component', () => {
  it('should render button component', () => {
    render(<Button variant='text'>Open Modal</Button>)

    const buttonText = screen.getByText('Open Modal')
    expect(buttonText).toBeVisible()
  })

  it('should render button component with icon', () => {
    render(<Button variant='icon'>
      <svg data-testid='button-icon' />
    </Button>)

    const buttonIcon = screen.getByTestId('button-icon')
    expect(buttonIcon).toBeVisible()
  })
})
