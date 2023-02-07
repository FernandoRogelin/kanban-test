import * as S from './styles'
import { CardProps } from './types'

const Card = ({ card }: CardProps) => {
  return (
    <S.Card>
      <S.Title>{card.titulo}</S.Title>
      <S.Text>{card.conteudo}</S.Text>
    </S.Card>
  )
}

export default Card
