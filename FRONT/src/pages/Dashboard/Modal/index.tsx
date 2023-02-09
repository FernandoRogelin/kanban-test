/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import * as S from './styles'

import DOMPurify from 'dompurify'
import { Button } from 'components'
import { ModalProps } from './types'
import { addCard } from 'services/card'
import { TypeCards } from '../types'

const Modal = ({ handleClose, handleSuccess }: ModalProps) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  useEffect(() => {
    const handleEsc = ({ key }: KeyboardEvent) => {
      key === 'Escape' && handleClose()
    }
    window.addEventListener('keyup', handleEsc)

    return () => window.removeEventListener('keyup', handleEsc)
  }, [])

  async function saveNewCard() {
    try {
      const values = {
        lista: 'ToDo',
        titulo: title,
        conteudo: DOMPurify.sanitize(content)
      } as TypeCards

      const response = await addCard(values)

      handleSuccess(response)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <S.Backdrop>
      <S.Wrapper>
        <S.Title>Adicionar um Card</S.Title>
        <S.Label>
          Título:
          <S.Input
            placeholder="Título do card"
            onChange={(e) => setTitle(e.target.value)}
          />
        </S.Label>
        <S.Label>
          Conteúdo:
          <S.TextArea
            placeholder="Conteúdo do card"
            onChange={(e) => setContent(e.target.value)}
          />
        </S.Label>
        <S.Footer>
          <Button disabled={!title || !content} onClick={saveNewCard}>
            Salvar
          </Button>
        </S.Footer>
      </S.Wrapper>
    </S.Backdrop>
  )
}

export default Modal
