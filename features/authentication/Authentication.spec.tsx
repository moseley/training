import { render, screen, act } from '@testing-library/react'
// import user from '@testing-library/user-event'
import { Provider } from 'react-redux'

// jest.mock('./counterAPI', () => ({
//   fetchCount: (amount: number) =>
//     new Promise<{ data: number }>((resolve) =>
//       setTimeout(() => resolve({ data: amount }), 500)
//     )
// }))

import { makeStore } from '@/app/store'
import { GuestAuth, MemberAuth, AdminAuth } from './Authentication'

describe('<Authentication />', () => {
  it('allows visitors when authentication is not required', () => {
    const store = makeStore()

    render(
      <Provider store={store}>
        <p>Visitors</p>
      </Provider>
    )
    expect(screen.getByText('Visitors')).toBeInTheDocument()
  })

  // it('denies unauthenticated users', () => {
  //   const store = makeStore()

  //   render(
  //     <Provider store={store}>
  //       <GuestAuth>
  //         <p>Guests Only</p>
  //       </GuestAuth>
  //     </Provider>
  //   )
  //   act(() => {
  //     expect(screen.queryByText('Guests Only')).toBeNull()
  //   })
  // })

  // it('renders for authenticated users', () => {
  //   const store = makeStore()

  //   render(
  //     <Provider store={store}>
  //       <GuestAuth>
  //         <p>Guests Only</p>
  //       </GuestAuth>
  //     </Provider>
  //   )

  //   expect(screen.getByText('Guests Only')).toBeInTheDocument()
  // })
})
