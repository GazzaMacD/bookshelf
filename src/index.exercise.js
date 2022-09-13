// 🐨 you'll need to import react and createRoot from react-dom up here
import * as React from 'react'
import {createRoot} from 'react-dom/client'
import {Dialog} from '@reach/dialog'
import '@reach/dialog/styles.css'

import {Logo} from 'components/logo'

function App() {
  const [openModal, setOpenModal] = React.useState('none')
  return (
    <div>
      <Logo height="80" width="80" />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => setOpenModal('login')}>Login</button>
      </div>
      <div>
        <button onClick={() => setOpenModal('register')}>Register</button>
      </div>
      <Dialog aria-label="Login form" isOpen={openModal === 'login'}>
        <div>
          <button onClick={() => setOpenModal('none')}>X</button>
        </div>
        <h3>Login</h3>
      </Dialog>
      <Dialog aria-label="Register form" isOpen={openModal === 'register'}>
        <div>
          <button onClick={() => setOpenModal('none')}>X</button>
        </div>
        <h3>Register</h3>
      </Dialog>
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)

export {root}
