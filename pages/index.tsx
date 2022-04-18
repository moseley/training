import type { NextPage } from 'next'
import Typography from '@mui/material/Typography'

const Home: NextPage = () => {
  return (
    <>
      <Typography variant='h2' component='h1' gutterBottom>
        Command Tactical Training
      </Typography>
      <p>
        Take command of the situation with our training simulator that will help fire professionals take their command
        skills, safety and career to the next level.
      </p>
    </>
  )
}

export default Home
