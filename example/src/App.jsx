import React from 'react'

import { ExampleComponent, Card, Button } from 'memphis-ui'
// import { Button } from 'memphis-uix'
import 'memphis-ui/dist/index.css'

const App = () => {
  const styles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
  return (
    <div className='container' style={styles}>
      <ExampleComponent text='Create React Library Example 😄' />
      <Button variant='primary'>
        How's it going!{' '}
        <span role='img' aria-label='smily'>
          😄
        </span>
      </Button>
      <Card heading='Card'>
        <div className='imge'></div>
        <div className='text'>Hello</div>
      </Card>
    </div>
  )
}

export default App
