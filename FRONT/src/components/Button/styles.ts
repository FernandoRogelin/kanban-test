import styled from '@emotion/styled'
import { css, Theme } from '@emotion/react'

import { ButtonProps } from './types'

const ButtonModifier = {
  disabled: (theme: Theme) => css`
    cursor: not-allowed;
    background-color: ${theme.colors.shipCove};
  `
}

export const Button = styled.button<ButtonProps>`
  ${({ theme, disabled }) => css`
    border: none;
    cursor: pointer;
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.xsmall};
    border-radius: ${theme.border.default};
    background-color: ${theme.colors.blue};
    font-weight: ${theme.fontWeight.xbold};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};

    &:hover {
      opacity: 0.8;
    }

    ${disabled && ButtonModifier.disabled(theme)}
  `}
`
