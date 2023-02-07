import { useMemo } from 'react'
import * as S from './styles'

import { Column, Card } from 'components'

const Dashboard = () => {
  const columns = useMemo(
    () => [
      {
        title: 'To do',
        data: {
          id: '1234',
          lista: 'Todo',
          titulo: 'Fernando',
          conteudo:
            'Testando vários textos para ver como vai ficar essa desgraça no layout dedle'
        }
      },
      {
        title: 'Doing',
        data: {
          id: '1234',
          lista: 'Todo',
          titulo: 'Fernando',
          conteudo: 'Testando'
        }
      },
      {
        title: 'Done',
        data: {
          id: '1234',
          lista: 'Todo',
          titulo: 'Fernando',
          conteudo: 'Testando'
        }
      }
    ],
    []
  )

  return (
    <S.Wrapper>
      <S.Board>
        {columns.map((column, index) => (
          <Column key={index} title={column.title}>
            <Card card={column.data} />
            <Card card={column.data} />
            <Card card={column.data} />
          </Column>
        ))}
      </S.Board>
    </S.Wrapper>
  )
}

export default Dashboard
