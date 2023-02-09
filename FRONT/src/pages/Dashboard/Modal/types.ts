import { TypeCards } from '../types'

export type ModalProps = {
  handleClose: () => void
  handleSuccess: (value: TypeCards) => void
}
