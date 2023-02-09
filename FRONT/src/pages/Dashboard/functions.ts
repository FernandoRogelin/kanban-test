import { TypeCards, Lista } from './types'

export function filterColumn(cards: TypeCards[], filter: Lista) {
  return cards.filter((card) => card.lista === filter)
}
