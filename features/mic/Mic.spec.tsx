import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { makeStore } from '../../app/store'
import Mic from './Mic'

// jest.mock('./permission', () => ({
//   fetchGranted: (granted: boolean) =>
//     new Promise<{ data: boolean }>(resolve =>
//       setTimeout(() => resolve({ data: granted }), 500)
//     )
// }))

describe('<Mic />', () => {
  beforeEach(() => {
    const store = makeStore()
    render(
      <Provider store={store}>
        <Mic />
      </Provider>
    )
  })

  it('renders the component', () => {
    expect(screen.getByText('Feature: Mic')).toBeInTheDocument()
  })

  it('shows permission snackbar', () => {
    expect(
      screen.getByText('You must provide access to your microphone!')
    ).toBeInTheDocument()
  })

  // it('grants permission', () => {
  //   user.click(screen.getByRole('button', { name: /enable mic/i }))
  //   expect(screen.getByText('Permission Granted: Yes')).toBeInTheDocument()
  // })
})
