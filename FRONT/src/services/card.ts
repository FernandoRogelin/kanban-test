import fetchService from 'services'

import { CardsResponse, CardPayload } from 'pages/Dashboard/types'

const cards = 'cards/'

export const getCards = () => fetchService<CardsResponse[]>({ url: cards })

export const addCard = (payload: CardPayload) =>
  fetchService<CardsResponse>({ url: cards, method: 'POST', body: payload })

export const updateCard = (payload: CardPayload) =>
  fetchService<CardsResponse>({
    method: 'PUT',
    body: payload,
    url: `${cards}${payload.id}`
  })

export const deleteCard = (id: string) =>
  fetchService<CardsResponse[]>({ url: `${cards}${id}`, method: 'DELETE' })
