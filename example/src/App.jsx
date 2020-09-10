import React from 'react'

import { ExampleComponent } from 'memphis-ui'
import { ZButton } from 'memphis-uix'
import 'memphis-ui/dist/index.css'

const App = () => {
  const styles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
  return (
    <div className="container" style={styles}>
      <ExampleComponent text="Create React Library Example 😄" />
      <ZButton text="Howdy 😄" />

    </div>
  )

}

export default App
