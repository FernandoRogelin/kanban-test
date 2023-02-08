import * as S from './styles'
import { CardProps } from './types'

import { Trash } from '@emotion-icons/boxicons-solid/Trash'
import { ChevronLeft } from '@emotion-icons/boxicons-regular/ChevronLeft'
import { ChevronRight } from '@emotion-icons/boxicons-regular/ChevronRight'

const Card = ({ card, handleDeleteCard, updateCard }: CardProps) => {
  return (
    <S.Card>
      <div>
        <S.Title>{card.titulo}</S.Title>
        <S.Text>{card.conteudo}</S.Text>
      </div>
      <S.Footer>
        <Trash size={22} onClick={() => handleDeleteCard(card.id)} />
      </S.Footer>
      {card.lista !== 'Done' && (
        <S.ChevronRight onClick={() => updateCard(card, 'right')}>
          <ChevronRight size={40} />
        </S.ChevronRight>
      )}
      {card.lista !== 'ToDo' && (
        <S.ChevronLeft onClick={() => updateCard(card, 'left')}>
          <ChevronLeft size={40} />
        </S.ChevronLeft>
      )}
    </S.Card>
  )
}

export default Card
