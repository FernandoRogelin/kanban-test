import * as S from './styles'
import { ButtonProps } from './types'

function Button({ children, ...props }: ButtonProps) {
  return <S.Button {...props}>{children}</S.Button>
}

export default Button
