// 🐨 you'll need to import react and createRoot from react-dom up here
import * as React from 'react'
import {createRoot} from 'react-dom/client'

import {Logo} from 'components/logo'

function App() {
  return (
    <div>
      <Logo height="80" width="80" />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => alert('Clicked Login')}>Login</button>
      </div>
      <div>
        <button onClick={() => alert('Clicked Register')}>Register</button>
      </div>
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)

export {root}
