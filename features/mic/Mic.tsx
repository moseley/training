import MicIcon from '@mui/icons-material/Mic'
import MicNoneIcon from '@mui/icons-material/MicNone'
import MicOffIcon from '@mui/icons-material/MicOff'
import { Box, Button, Typography } from '@mui/material'
import { green, orange } from '@mui/material/colors'
import * as React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import {
  radioClose,
  radioOpen,
  recordingBegin,
  recordingEnd,
  selectPermission,
  selectStatus
} from './micSlice'
import Permission from './Permission'

const Mic = () => {
  const dispatch = useAppDispatch()
  const permission = useAppSelector(selectPermission)
  const status = useAppSelector(selectStatus)

  // React.useEffect(() => {
  //   const permissionName = 'microphone' as PermissionName
  //   navigator.permissions
  //     .query({ name: permissionName })
  //     .then(permissionStatus => {
  //       if (permissionStatus.state === 'granted') {
  //         console.log('need to dispatch that permission is granted')
  //         // dispatch(setPermissionGranted())
  //       } else {
  //         console.log('no permission')
  //         // setIsLoading(false)
  //       }
  //     })
  // }, [])

  return (
    <Box>
      <Permission />
      {permission ? (
        status === 'disabled' ? (
          <MicNoneIcon fontSize='large' />
        ) : (
          <MicIcon
            fontSize='large'
            sx={{ color: status === 'recording' ? green[500] : orange[500] }}
          />
        )
      ) : (
        <MicOffIcon fontSize='large' />
      )}
      <Typography variant='body2'>Feature: Mic</Typography>
      <Typography variant='body2'>
        Permission Granted: {permission ? 'Yes' : 'No'}
      </Typography>
      {permission && (
        <>
          <Typography variant='body2'>Status: {status}</Typography>
          {status === 'disabled' && (
            <Button onClick={() => dispatch(radioOpen())}>Open</Button>
          )}
          {status === 'idle' && (
            <Button onClick={() => dispatch(radioClose())}>Close</Button>
          )}
          {status === 'idle' && (
            <Button onClick={() => dispatch(recordingBegin())}>Record</Button>
          )}
          {status === 'recording' && (
            <Button onClick={() => dispatch(recordingEnd())}>Stop</Button>
          )}
        </>
      )}
    </Box>
  )
}

export default Mic
