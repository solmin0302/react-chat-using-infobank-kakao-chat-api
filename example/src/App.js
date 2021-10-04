import React from 'react'

import { ExampleComponent } from 'react-chat-using-infobank-kakao-chat-api'
import 'react-chat-using-infobank-kakao-chat-api/dist/index.css'

const App = () => {
  return (
    <div className="container">
      <div className='bg'></div>
      <ExampleComponent text="Create React Library Example 😄" />
    </div>
  ) 
}

export default App
