import MicIcon from '@mui/icons-material/Mic'
import { Alert, Button, Snackbar } from '@mui/material'
import * as React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { grantPermission, selectPermission } from './micSlice'

const Permission = () => {
  const dispatch = useAppDispatch()
  const permission = useAppSelector(selectPermission)

  const openMicPermission = () => {
    const permissions = navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    })
    permissions
      .then(stream => {
        console.log('permission granted')
        dispatch(grantPermission())
        stream.getTracks().forEach(track => track.stop())
      })
      .catch(_err => {
        console.log('permission not granted')
      })
  }

  return (
    <Snackbar
      open={!permission}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <Alert
        icon={<MicIcon fontSize='inherit' />}
        severity='error'
        action={
          <Button color='inherit' size='small' onClick={openMicPermission}>
            Enable Mic
          </Button>
        }>
        You must provide access to your microphone!
      </Alert>
    </Snackbar>
  )
}

export default Permission
