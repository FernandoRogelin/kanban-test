import { CardsResponse } from 'pages/Dashboard/types'

export type CardProps = {
  card: CardsResponse
  handleDeleteCard: (id: string) => void
  updateCard: (value: CardsResponse, chevron?: Chevrons) => void
}

export type Chevrons = 'left' | 'right'

export type FooterProps = {
  edit: boolean
}
