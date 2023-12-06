import { EntriesContext } from '@/context/entries'
import { UIContext } from '@/context/ui'
import { type ChangeEvent, useState, useContext } from 'react'

export const useNewEntry = () => {
  const [inputValues, setInputValues] = useState({
    title: '',
    description: ''
  })
  const { addNewEntry } = useContext(EntriesContext)
  const { openNewEntry } = useContext(UIContext)

  const handleChangeInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [target.name]: target.value
    })
  }

  const handleCloseNewEntry = () => {
    openNewEntry(false)
  }

  const handleOpenNewEntry = () => {
    openNewEntry(true)
  }

  const handleSUbmit = () => {
    const { description, title } = inputValues
    if (title === '' || description === '') return
    addNewEntry(description, title)
    setInputValues({
      title: '',
      description: ''
    })
    openNewEntry(false)
  }

  return {
    inputValues,
    handleChangeInput,
    handleCloseNewEntry,
    handleOpenNewEntry,
    handleSUbmit
  }
}
