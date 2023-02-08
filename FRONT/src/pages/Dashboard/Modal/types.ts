import { CardsResponse } from '../types'

export type ModalProps = {
  handleClose: () => void
  handleSuccess: (value: CardsResponse) => void
}
