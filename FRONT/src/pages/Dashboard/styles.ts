import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const Wrapper = styled.main`
  height: 100vh;
`

export const Board = styled.div`
  ${({ theme }) => css`
    height: 86%;
    display: grid;
    justify-content: center;
    column-gap: ${theme.spacings.small};
    grid-template-columns: repeat(3, 26rem);
  `}
`
