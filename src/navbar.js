import css from "./navbar.css";
let Navbar = ()=>{
    let txt = ['Products',  'Cartel', 'About us', 'Login', 'SignUp'] 
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-light our-nav">
                <a className="navbar-brand" id='brando' href="#"><i style={{fontSize:"24px"}} className='fas clover'>&#xf4d8;</i>Fruit Store</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                {
                        txt.map((e,i)=>{
                            return <a href="https://www.google.com/" className="nav-item nav-link links" key={i}>
                                <div className="list">{e}</div></a>
                        })
                    }
                </div>
            </div>
            <div className="input-container">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <a href='https://www.google.com' id="search"><i className="fa">&#xf002;</i></a>
                            </div>
                        </div>
                        <input type="text" className="form-control" aria-label="Text input with checkbox" />
            </div>
            </nav>
        </div>
    )
}

export default Navbar;