import { useEffect, useState, useMemo } from 'react'
import { useCookies } from 'react-cookie'

import * as S from './styles'
import { CardsResponse } from './types'
import { getCards } from 'services/card'
import { Column, Card } from 'components'
import { filterColumn } from './functions'

const Dashboard = () => {
  const [token] = useCookies(['token'])

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
        {columns.map((column, index) => (
          <Column key={index} title={column.title}>
            {column.data.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </Column>
        ))}
      </S.Board>
    </S.Wrapper>
  )
}

export default Dashboard
