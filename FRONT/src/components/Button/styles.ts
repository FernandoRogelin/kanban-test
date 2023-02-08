import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const Button = styled.button`
  ${({ theme }) => css`
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
  `}
`
