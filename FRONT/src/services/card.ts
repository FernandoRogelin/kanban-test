import fetchService from 'services'

import { TypeCards } from 'pages/Dashboard/types'

const cards = 'cards/'

export const getCards = () => fetchService<TypeCards[]>({ url: cards })

export const addCard = (payload: TypeCards) =>
  fetchService<TypeCards>({ url: cards, method: 'POST', body: payload })

export const updateCard = (payload: TypeCards) =>
  fetchService<TypeCards>({
    method: 'PUT',
    body: payload,
    url: `${cards}${payload.id}`
  })

export const deleteCard = (id: string) =>
  fetchService<TypeCards[]>({ url: `${cards}${id}`, method: 'DELETE' })
