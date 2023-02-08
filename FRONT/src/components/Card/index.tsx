import * as S from './styles'
import { CardProps } from './types'

const Card = ({ card, handleDeleteCard }: CardProps) => {
  return (
    <S.Card onClick={() => handleDeleteCard(card.id)}>
      <S.Title>{card.titulo}</S.Title>
      <S.Text>{card.conteudo}</S.Text>
    </S.Card>
  )
}

export default Card
