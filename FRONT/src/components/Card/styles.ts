import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const Card = styled.div`
  ${({ theme }) => css`
    width: 22rem;
    display: flex;
    padding: 1.24rem;
    min-height: 15rem;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
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

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacings.xxsmall};

  & > svg {
    cursor: pointer;
  }
`

const Chevrons = styled.div`
  top: 50%;
  right: -18px;
  position: absolute;
  transform: translate(0, -50%);

  & > svg {
    cursor: pointer;
  }
`

export const ChevronRight = styled(Chevrons)`
  right: -18px;
`

export const ChevronLeft = styled(Chevrons)`
  left: -18px;
`
