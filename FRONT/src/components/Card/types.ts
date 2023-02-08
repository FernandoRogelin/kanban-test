import { CardsResponse } from 'pages/Dashboard/types'

export type CardProps = {
  card: CardsResponse
  handleDeleteCard: (id: string) => void
}
