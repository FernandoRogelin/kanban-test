import { useEffect, useState, useMemo } from 'react'
import { useCookies } from 'react-cookie'

import Modal from './Modal'
import * as S from './styles'
import { TypeCards } from './types'
import { filterColumn } from './functions'
import { Chevrons } from 'components/Card/types'
import { Column, Card, Button } from 'components'
import { getCards, deleteCard, updateCard } from 'services/card'

const Dashboard = () => {
  const [token] = useCookies(['token'])

  const [isOpenModal, setIsOpenModal] = useState(false)
  const [cards, setCards] = useState<TypeCards[]>([])

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

  function handleSuccess(value: TypeCards) {
    const newCards = cards.concat(value)
    setCards(newCards)

    setIsOpenModal(false)
  }

  function nextCardList(card: TypeCards, chevron?: Chevrons) {
    if (!chevron) return card

    const listsChevronRight = {
      ToDo: chevron === 'right' ? 'Doing' : 'ToDo',
      Doing: chevron === 'right' ? 'Done' : 'ToDo',
      Done: chevron === 'right' ? 'Done' : 'Doing'
    }

    return { ...card, lista: listsChevronRight[card.lista] } as TypeCards
  }

  async function updateOneCard(card: TypeCards, chevron?: Chevrons) {
    try {
      const response = await updateCard(nextCardList(card, chevron))

      const newValues = cards.map(
        (card) => [response].find((newCard) => newCard.id === card.id) || card
      )
      setCards(newValues)
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
                updateCard={updateOneCard}
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
