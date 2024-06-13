import { useState } from 'react'
import Form from './components/formularioReg'

const d = new Date()

function App() {
  return(
    <form id='form_main'>
      <img className="mb-4" src="/images/eysaLogo.jpg" alt="img" width="72" height="57" />
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

      <Form />
      
      
      <p className="mt-5 mb-3 text-body-secondary">© {d.getFullYear()}</p>
  </form>
  )
}

export default App
