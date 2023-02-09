import { TypeCards } from 'pages/Dashboard/types'

export type CardProps = {
  card: TypeCards
  handleDeleteCard: (id: string) => void
  updateCard: (value: TypeCards, chevron?: Chevrons) => void
}

export type Chevrons = 'left' | 'right'

export type FooterProps = {
  edit: boolean
}
