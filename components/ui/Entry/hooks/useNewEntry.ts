import { EntriesContext } from '@/context/entries'
import { type ChangeEvent, useState, useContext } from 'react'

export const useNewEntry = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [inputValue, setInputValue] = useState({
    title: '',
    description: ''
  })
  const { addNewEntry } = useContext(EntriesContext)

  const handleChangeInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInputValue({
      ...inputValue,
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
    const { description, title } = inputValue
    if (title === '' || description === '') return
    addNewEntry(description, title)
    handleCloseNewEntry()
  }

  return {
    isOpenModal,
    inputValue,
    handleChangeInput,
    handleCloseNewEntry,
    handleOpenNewEntry,
    handleSUbmit
  }
}
