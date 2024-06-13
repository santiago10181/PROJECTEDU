import { useState } from 'react'

const d = new Date()

const FormLabel = (props) =>{
  return(
    <>
      <div class="form-floating">
        <input type={props.type} class="form-control" id={props.id} placeholder={props.placeholder}  />
        <label for={props.forFloating}>{props.content}</label>
      </div>
    </>
  )
}
function FormLog() {
  return (
    <form>
      <img class="mb-4" src="images/eysaLogo.jpg" alt="" width="72" height="57" />
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
      <FormLabel  type="email" id="emailInput" placeholder="name@etece.com" forFloating="floatingInput" content="Email"/>
      <FormLabel  type="password" id="passInput" placeholder="Password" forFloating="floatingPassword" content="Password"/>
      <button class="btn btn-primary w-100 py-2 mt-4" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-body-secondary">© {d.getFullYear()}</p>
    </form>
  )
}

export default FormLog
