
import React from "react"


const Email = ()=>{

  return(
    <>
      <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" />
            <label for="floatingInput">Email address</label>
      </div>
    </>
  )

}
const Password = ()=>{

  return(
    <>
      <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password"/>
            <label for="floatingPassword">Password</label>
      </div>
    </>
  )

}

function App() {

  return (
    <>
		<main className="form-signin w-100 m-auto">
			<form method="POST" action="/login">
				<img className="mb-4" src="/images/eysaLogo.jpg" alt="" width="85" height="80" />
				<h1 className="h3 mb-3 fw-normal mt-5">Please sign in</h1>
				<Email  />
				<Password />
				<button className="btn btn-success w-100 py-2 mt-4" type="submit">Sign in</button>
				<p className="mt-5 mb-3 text-body-secondary">© 2024</p>
			</form>
		</main>	
    </>
  )
}

export default App
