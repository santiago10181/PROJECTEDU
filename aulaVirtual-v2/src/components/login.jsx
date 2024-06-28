



const Email = ()=>{

  return(
    <>
      <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"  />
            <label for="floatingInput">Email address</label>
      </div>
    </>
  )

}
const Password = ()=>{

  return(
    <>
      <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"  />
            <label for="floatingPassword">Password</label>
      </div>
    </>
  )

}

function App() {

    const handleSubmit = (event) => {
      event.preventDefault();
      // Aquí podrías agregar la lógica de autenticación
      window.location.href = '/home'; // Redirigir a /home después de iniciar sesión
    };
  return (
    <>
		<main className="form-signin w-100 m-auto">
			<form onSubmit={handleSubmit}>
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
