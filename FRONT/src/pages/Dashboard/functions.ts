import { CardsResponse, Lista } from './types'

export function filterColumn(cards: CardsResponse[], filter: Lista) {
  return cards.filter((card) => card.lista === filter)
}
