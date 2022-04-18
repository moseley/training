import { CircularProgress } from '@mui/material'
import { useRouter } from 'next/router'
import * as React from 'react'
import useUser from './useUser'

const Login = () => {
  const { user, loading } = useUser()
  const router = useRouter()

  React.useEffect(() => {
    if (!user || loading) {
      router.push('/login')
    }
  }, [user, loading])

  return <CircularProgress />
}

export default Login
