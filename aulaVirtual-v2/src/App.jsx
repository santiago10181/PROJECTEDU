

const Email = ()=>{

  return(
    <>
      <div class="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"  />
            <label for="floatingInput">Email address</label>
      </div>
    </>
  )

}
const Password = ()=>{

  return(
    <>
      <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"  />
            <label for="floatingPassword">Password</label>
      </div>
    </>
  )

}

function App() {
  return (
    <>
      
      <form>
        <img class="mb-4" src="/images/eysaLogo.jpg" alt="" width="85" height="80" />
        <h1 class="h3 mb-3 fw-normal mt-5">Please sign in</h1>
        <Email  />
        <Password />
        <button class="btn btn-success w-100 py-2 mt-4" type="submit">Sign in</button>
          <p class="mt-5 mb-3 text-body-secondary">© 2024</p>
      </form>
        
    </>
  )
}

export default App
