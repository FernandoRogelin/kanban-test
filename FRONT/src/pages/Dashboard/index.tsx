import { useEffect, useState, useMemo } from 'react'
import { useCookies } from 'react-cookie'

import Modal from './Modal'
import * as S from './styles'
import { CardsResponse } from './types'
import { getCards } from 'services/card'
import { filterColumn } from './functions'
import { Column, Card, Button } from 'components'

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
              <Card key={card.id} card={card} />
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
