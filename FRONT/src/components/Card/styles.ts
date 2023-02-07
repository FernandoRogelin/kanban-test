import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const Card = styled.div`
  ${({ theme }) => css`
    width: 22rem;
    padding: 1.24rem;
    min-height: 15rem;
    box-shadow: ${theme.boxShadow};
    background: ${theme.colors.white};
    border-radius: ${theme.border.medium};
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    text-align: center;
    word-break: break-all;
    font-size: ${theme.fontSizes.small};
    font-weight: ${theme.fontWeight.bold};
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.shipCove};
    font-size: ${theme.fontSizes.xsmall};
  `}
`

export const Footer = styled.footer``
