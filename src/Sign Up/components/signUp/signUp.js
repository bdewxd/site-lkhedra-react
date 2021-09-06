import css from "./signUp.css";
let SignUp = ()=>{
    return(
        <div className='article-signUp'>
            <article className="card-body mx-auto" style={{maxWidth: '400px'}}>
                <h4 className="card-title mt-3 text-center">Create Account</h4>
                <p className="text-center">Get started with your free account</p>
                <form>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                        </div>
                        <input name="" className="form-control" placeholder="Full name" type="text" />
                    </div> 
                    {/* <!-- form-group// --> */}
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                        </div>
                        <input name="" className="form-control" placeholder="Email address" type="email" />
                    </div> 
                    {/* <!-- form-group// --> */}
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-phone"></i> </span>
                        </div>
                        <select className="custom-select" style={{maxWidth: '120px'}}>
                            <option selected="">+212</option>
                        </select>
                        <input name="" className="form-control" placeholder="Phone number" type="text" />
                    </div> 
                    {/* <!-- form-group end.// --> */}
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                        </div>
                        <input className="form-control" placeholder="Create password" type="password" />
                    </div> 
                    {/* <!-- form-group// --> */}
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                        </div>
                        <input className="form-control" placeholder="Repeat password" type="password" />
                    </div> 
                    {/* <!-- form-group// -->*/}
                    <div className="form-group">
                        <button type="submit" className="btn btn-success btn-block"> Create Account  </button>
                    </div>            
                    <p class="text-center">Have an account? <a href="">Log In</a> </p>                                                           
                </form>
            </article>
        </div>
    )
}
export default SignUp;
