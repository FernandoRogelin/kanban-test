export type TypeCards = {
  id: string
  lista: Lista
  titulo: string
  conteudo: string
}

export type Lista = 'ToDo' | 'Doing' | 'Done'
