import { ComponentProps, forwardRef } from 'react'

import * as S from './styles'

export interface ButtonProps extends ComponentProps<typeof S.Button> {
  variant: 'icon' | 'text'
}

/**
 * Button component
 *
 * @param variant Choose between icon or text
 *
 * @returns a button component styled
 * @example
 * <Button variant="icon">Click me</Button>
 * <Button variant="text">Click me</Button>
 */
export const Button = forwardRef<
  React.ElementRef<typeof S.Button>,
  ButtonProps
>(
  (
    { children, ...props },
    forwardedRef,
  ) => (
    <S.Button {...props} ref={forwardedRef} type="button">
      {children}
    </S.Button>
  ),
)