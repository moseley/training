import { useAppSelector, useAppDispatch } from '@/app/hooks'
import {
  setUser,
  selectLevel,
  Level
} from '@/features/authentication/authenticationSlice'
import { ReactNode } from 'react'
import { Authenticator } from '@aws-amplify/ui-react'
import { Button } from '@mui/material'
import { useRouter } from 'next/router'
import * as React from 'react'

interface AuthenticationProps {
  minimumLevel: Level
  children: ReactNode
}

const Authentication = ({
  minimumLevel = 'guest',
  children
}: AuthenticationProps) => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const level = useAppSelector(selectLevel)

  let authRequired = true

  if (level === 'admin') {
    authRequired = false
  } else if (level === 'member' && minimumLevel !== 'admin') {
    authRequired = false
  } else if (level === 'visitor' && minimumLevel === 'visitor') {
    authRequired = false
  }

  if (!authRequired) {
    return <>{children}</>
  }

  return (
    <Authenticator loginMechanisms={['email']}>
      {({ signOut, user }) => {
        // https://github.com/aws-amplify/amplify-ui/issues/1064
        const aUser = user as any
        const isMember = Boolean(
          aUser.attributes['custom:stripecustomerid'] &&
            aUser.attributes['custom:expired'] === '0'
        )
        const isAdmin = Boolean(
          aUser.signInUserSession.accessToken.payload['cognito:groups'] &&
            aUser.signInUserSession.accessToken.payload[
              'cognito:groups'
            ].includes('Admin')
        )
        const level = isAdmin ? 'admin' : isMember ? 'member' : 'guest'

        dispatch(
          setUser({
            id: user.username,
            displayName: '',
            email: '', //user.getUserAttributes,
            level
          })
        )

        if (
          (level === 'guest' && minimumLevel === 'member') ||
          minimumLevel === 'admin'
        ) {
          router.push('/guest')
        }
        if (level === 'member' && minimumLevel === 'admin') {
          router.push('/member')
        }

        return (
          <>
            <Button onClick={signOut}>Sign Out</Button>
            {children}
          </>
        )
      }}
    </Authenticator>
  )
}

const GuestAuth = ({ children }: { children: ReactNode }) => (
  <Authentication minimumLevel='guest'>{children}</Authentication>
)

const MemberAuth = ({ children }: { children: ReactNode }) => (
  <Authentication minimumLevel='guest'>{children}</Authentication>
)

const AdminAuth = ({ children }: { children: ReactNode }) => (
  <Authentication minimumLevel='guest'>{children}</Authentication>
)

export { GuestAuth, MemberAuth, AdminAuth }

export default Authentication
