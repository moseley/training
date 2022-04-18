import * as React from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

const CardComponent = (props: { heading?: string; title?: string; subtitle?: string; copy?: string }) => {
  const { heading, title, subtitle, copy } = props
  return (
    <Card sx={{ maxWidth: 375 }}>
      <CardContent>
        <div style={{ backgroundColor: '#fff' }}>Hi</div>
        {heading && (
          <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
            {heading}
          </Typography>
        )}
        {title && (
          <Typography variant='h5' component='div'>
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            {subtitle}
          </Typography>
        )}
        {copy && <Typography variant='body2'>{copy}</Typography>}
      </CardContent>
    </Card>
  )
}

export default CardComponent
