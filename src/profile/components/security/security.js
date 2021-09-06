import React from 'react';

class Security extends React.Component {
    constructor(){
        super();
        this.state ={
            email:"joshua@meurt.ez",
            password:"1715ohmeurt"    
        }
        this.setEmail = this.setEmail.bind(this);
        this.setPassword=this.setPassword.bind(this);
    }
    setEmail(event){
        this.setState({email : event.target.value});
    }
    setPassword(event){
        this.setState({password : event.target.value});
    }

    
    render(){
    return (
        <div>
        
            <form>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label htmlFor="intputEmail">Email</label>
                        <input type="text" class="form-control" id="intputEmail" onChange={this.setEmail} value={this.state.email} />
                    </div>
                    <div class="form-group col-md-6">
                        <label htmlFor="inputPassword">Password</label>
                        <input type="password" class="form-control" id="inputPassword" onChange={this.setPassword} maxLength="20"
                            value={this.state.password} />
                    </div>
                </div>
                <button type="submit" class="btn btn-success">Update</button>
            </form>
        </div>
    );
}
}

export default Security;