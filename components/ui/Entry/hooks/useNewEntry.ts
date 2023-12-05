import { EntriesContext } from '@/context/entries'
import { type ChangeEvent, useState, useContext } from 'react'

export const useNewEntry = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [inputValues, setInputValues] = useState({
    title: '',
    description: ''
  })
  const { addNewEntry } = useContext(EntriesContext)

  const handleChangeInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [target.name]: target.value
    })
  }

  const handleCloseNewEntry = () => {
    setIsOpenModal(false)
  }

  const handleOpenNewEntry = () => {
    setIsOpenModal(true)
  }

  const handleSUbmit = () => {
    const { description, title } = inputValues
    if (title === '' || description === '') return
    addNewEntry(description, title)
    handleCloseNewEntry()
    setInputValues({
      title: '',
      description: ''
    })
  }

  return {
    isOpenModal,
    inputValues,
    handleChangeInput,
    handleCloseNewEntry,
    handleOpenNewEntry,
    handleSUbmit
  }
}
