import { useContext } from 'react'
import { Box, Button, Modal, TextField } from '@mui/material'

import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'

import { UIContext } from '@/context/ui'

import { useNewEntry } from './hooks'

export const NewEntry = () => {
  const {
    inputValues,
    handleChangeInput,
    handleCloseNewEntry,
    handleOpenNewEntry,
    handleSUbmit
  } = useNewEntry()

  const { isAddEntry } = useContext(UIContext)

  return (
  <Box sx={{ marginBottom: 2, paddingX: 1 }}>

      <Button
        onClick={handleOpenNewEntry}
        fullWidth
        variant='outlined'
        startIcon={<AddCircleOutlineOutlinedIcon />}
      >
        New Entry
      </Button>
      { isAddEntry && (
          <Modal open={isAddEntry} onClose={() => { console.log(true) }}>
            <Box sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 600,
              bgcolor: 'background.paper',
              borderRadius: 4,
              boxShadow: 24,
              p: 4
            }}>
                <TextField
                  label='Title of New Entry'
                  name='title'
                  value={inputValues.title}
                  onChange={handleChangeInput}
                  fullWidth
                  sx={{ marginBottom: 2 }}
                  type='text'
                />
                <TextField
                  fullWidth
                  label='Description To New Entry'
                  name='description'
                  sx={{ marginTop: 2, marginBottom: 2 }}
                  autoFocus
                  value={inputValues.description}
                  onChange={handleChangeInput}
                  multiline
                  rows={4}
                />
                <Box display='flex' justifyContent='space-between'>
                  <Button
                    onClick={handleCloseNewEntry}
                    variant='text'
                    startIcon={<CancelOutlinedIcon />}
                  >Cancel</Button>
                  <Button
                    variant='outlined'
                    color='primary'
                    startIcon={<SaveOutlinedIcon />}
                    onClick={handleSUbmit}
                  >
                    Save
                  </Button>
                </Box>
            </Box>
          </Modal>
      )}
    </Box>
  )
}
