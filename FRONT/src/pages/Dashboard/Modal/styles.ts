import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const Backdrop = styled.div`
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100vh;
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    top: 50%;
    left: 50%;
    z-index: 2;
    width: 20%;
    position: fixed;
    transform: translate(-50%, -50%);
    border-radius: ${theme.border.default};
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small} ${theme.spacings.large};
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.fontSizes.xxlarge};
    margin-bottom: ${theme.spacings.small};
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.medium};
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    border: none;
    outline: none;
    padding-bottom: 0.5rem;
    margin-bottom: ${theme.spacings.xsmall};
    border-bottom: 1px solid ${theme.colors.gray};
  `}
`

export const TextArea = styled.textarea`
  width: 100%;
  resize: none;
  outline: none;
  min-height: 6rem;
`

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
`
