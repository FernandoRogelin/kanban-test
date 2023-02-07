import * as S from './styles'
import { ColumnProps } from './types'

const Column = ({ title, children }: ColumnProps) => {
  return (
    <S.Column>
      <S.Header>
        <S.Title>{title}</S.Title>
      </S.Header>

      <S.WrapperChildren>{children}</S.WrapperChildren>
    </S.Column>
  )
}

export default Column
