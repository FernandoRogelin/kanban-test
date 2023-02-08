import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const Wrapper = styled.main`
  height: 100vh;
`

export const Board = styled.div`
  ${({ theme }) => css`
    height: 86%;
    display: grid;
    align-items: flex-start;
    justify-content: center;
    column-gap: ${theme.spacings.small};
    padding-top: ${theme.spacings.xxsmall};
    grid-template-columns: 14rem repeat(3, 26rem);
  `}
`
