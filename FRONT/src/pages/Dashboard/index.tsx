import { useEffect, useState, useMemo } from 'react'
import { useCookies } from 'react-cookie'

import Modal from './Modal'
import * as S from './styles'
import { CardsResponse } from './types'
import { filterColumn } from './functions'
import { Chevrons } from 'components/Card/types'
import { Column, Card, Button } from 'components'
import { getCards, deleteCard } from 'services/card'

const Dashboard = () => {
  const [token] = useCookies(['token'])

  const [isOpenModal, setIsOpenModal] = useState(false)
  const [cards, setCards] = useState<CardsResponse[]>([])

  const columns = useMemo(
    () => [
      {
        title: 'To do',
        data: filterColumn(cards, 'ToDo')
      },
      {
        title: 'Doing',
        data: filterColumn(cards, 'Doing')
      },
      {
        title: 'Done',
        data: filterColumn(cards, 'Done')
      }
    ],
    [cards]
  )

  function handleSuccess(value: CardsResponse) {
    const newCards = cards.concat(value)
    setCards(newCards)

    setIsOpenModal(false)
  }

  async function updateCard(card: CardsResponse, chevron: Chevrons) {
    try {
      console.log(card)
      console.log(chevron)
    } catch (error) {
      console.error(error)
    }
  }

  async function removeCard(id: string) {
    try {
      const response = await deleteCard(id)

      setCards(response)
    } catch (error) {
      console.error(error)
    }
  }

  async function fetchCards() {
    try {
      const response = await getCards()

      setCards(response)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (token.token) fetchCards()
  }, [token.token])

  return (
    <S.Wrapper>
      <S.Board>
        <Button onClick={() => setIsOpenModal(true)}>Adicionar Card</Button>
        {columns.map((column, index) => (
          <Column key={index} title={column.title}>
            {column.data.map((card) => (
              <Card
                card={card}
                key={card.id}
                updateCard={updateCard}
                handleDeleteCard={removeCard}
              />
            ))}
          </Column>
        ))}
      </S.Board>
      {isOpenModal && (
        <Modal
          handleSuccess={handleSuccess}
          handleClose={() => setIsOpenModal(false)}
        />
      )}
    </S.Wrapper>
  )
}

export default Dashboard
