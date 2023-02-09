import { useState } from 'react'
import * as S from './styles'

import { Cancel } from '@emotion-icons/material/Cancel'
import { Trash } from '@emotion-icons/boxicons-solid/Trash'
import { EditAlt } from '@emotion-icons/boxicons-regular/EditAlt'
import { ChevronLeft } from '@emotion-icons/boxicons-regular/ChevronLeft'
import { SaveEdit } from '@emotion-icons/fluentui-system-regular/SaveEdit'
import { ChevronRight } from '@emotion-icons/boxicons-regular/ChevronRight'

import { CardProps } from './types'
import { CardsResponse } from 'pages/Dashboard/types'
import { TextArea } from 'pages/Dashboard/Modal/styles'

const Card = ({ card, handleDeleteCard, updateCard }: CardProps) => {
  const [edit, setEdit] = useState(false)
  const [editTitle, setEditTitle] = useState('')
  const [editContent, setEditContent] = useState('')

  function saveUpdate() {
    const newCard = {
      ...card,
      titulo: editTitle || card.titulo,
      conteudo: editContent || card.conteudo
    } as CardsResponse

    updateCard(newCard)
    setEdit(false)
  }

  return (
    <S.Card>
      {!edit && (
        <S.EditIcon onClick={() => setEdit(true)}>
          <EditAlt size={25} />
        </S.EditIcon>
      )}

      <div>
        {edit ? (
          <S.Input
            defaultValue={card.titulo}
            onChange={(e) => setEditTitle(e.target.value)}
          />
        ) : (
          <S.Title>{card.titulo}</S.Title>
        )}

        {edit ? (
          <TextArea
            defaultValue={card.conteudo}
            onChange={(e) => setEditContent(e.target.value)}
          />
        ) : (
          <S.Text>{card.conteudo}</S.Text>
        )}
      </div>

      {!edit && card.lista !== 'Done' && (
        <S.ChevronRight onClick={() => updateCard(card, 'right')}>
          <ChevronRight size={40} />
        </S.ChevronRight>
      )}

      {!edit && card.lista !== 'ToDo' && (
        <S.ChevronLeft onClick={() => updateCard(card, 'left')}>
          <ChevronLeft size={40} />
        </S.ChevronLeft>
      )}

      <S.Footer edit={edit}>
        {!edit && <Trash size={20} onClick={() => handleDeleteCard(card.id)} />}
        {edit && (
          <>
            <Cancel size={24} onClick={() => setEdit(false)} />
            <SaveEdit size={24} onClick={saveUpdate} />
          </>
        )}
      </S.Footer>
    </S.Card>
  )
}

export default Card
