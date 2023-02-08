export type CardsResponse = {
  id: string
  lista: Lista
  titulo: string
  conteudo: string
}

export type Lista = 'ToDo' | 'Doing' | 'Done'

export type CardPayload = {
  lista: Lista
  titulo: string
  conteudo: string
}
