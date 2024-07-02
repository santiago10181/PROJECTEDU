 
  import backgroundDash from '/images/bg-login.jpg'
  
  const ListItems = (props)=>{
    return(
        <li className="nav-item">
            <a href="#" className={`nav-link ${props.active} link-light`} aria-current="page">
                <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
                {props.item}
            </a>
        </li>
    )
  }
  const UserItems = (props)=>{
    return(
        <>
            <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="" alt="" width="32" height="32" className="rounded-circle me-2" />
                <strong>mdo</strong>
            </a>
            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                <li><a className="dropdown-item" href="#">New project...</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><hr className="dropdown-divider"    /></li>
                <li><a className="dropdown-item" href="#">Sign out</a></li>
            </ul>
        </>
    )
  }
  
  
  
  function Home() {
    return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-auto d-flex flex-column flex-shrink-0 p-3 text-bg-success " style={{width: "250px"}}>
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <img src="/images/eysaLogo.jpg" alt="EYSA Logo" width="60" height="60" className="me-2 rounded-circle"/>
                <span className="fs-4">EYSA</span>
                </a>
                <hr />

                <ul className="nav nav-pills flex-column mb-auto">
                    <ListItems  item="Home"  active='active'/>
                    <ListItems  item="Dashboard" />
                    <ListItems  item="Orders"  />
                    <ListItems  item="Products"  />
                    <ListItems  item="Customers"  />
                </ul>
                <hr />
                
                <div className="dropdown">
                <UserItems    />
                </div>
            </div>
            <main className="col justify-content-center align-items-center" style={{ backgroundImage: `url(${backgroundDash})`}}>
                {/* Contenido del Dashboard */}
                <h1>Dashboard</h1>
                <p >Bienvenido al panel de control.</p>
                {/* Añade aquí el contenido adicional del Dashboard */}
                <img  src='/images/eysaLogo.jpg'  />
            </main>
        </div>
    </div>
    )
  }
  
  export default Home
  