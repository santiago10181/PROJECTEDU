    

const Form = ()=>{
    return(
    <div>
        <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Password</label>
        </div>

        <div className="form-check text-start my-3">
            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
            <label className="form-check-label" for="flexCheckDefault">
                Remember me
            </label>
        </div>
        <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
    </div>
    )
}
export default Form
    