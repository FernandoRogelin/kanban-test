import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const Column = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    border: 0.2rem solid transparent;
    padding: ${theme.spacings.xxsmall};
    border-radius: ${theme.border.medium};
    background-color: ${theme.colors.catskillWhite};

    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;

      background-color: transparent;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: ${theme.colors.lightGray};
    }
  `}
`

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin-bottom: ${theme.spacings.xxsmall};
    padding-bottom: ${theme.spacings.xxsmall};
    border-bottom: 1px solid ${theme.colors.gray};
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.shipCove};
    font-size: ${theme.fontSizes.small};
    line-height: ${theme.fontSizes.small};
    font-weight: ${theme.fontWeight.bold};
  `}
`

export const WrapperChildren = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spacings.xxsmall};
`
