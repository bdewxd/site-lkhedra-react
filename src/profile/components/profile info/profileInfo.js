import React from "react";
import { useState } from "react/cjs/react.development";
import css from "./profileInfo.css";


class ProfileInfo extends React.Component{
  constructor(){
      super();
      this.state = {
        fullname : "joshua ait taleb",
        username : "joshua mkitilla 69",
        email : "joshua@meurt.ez",
        location : "vegas",
        zip : 40000   
      }
      this.setFullname = this.setFullname.bind(this);
      this.setUsername = this.setUsername.bind(this);
      this.setEmail = this.setEmail.bind(this);
      this.setLocation = this.setLocation.bind(this);
      this.setZip = this.setZip.bind(this);

  }
  
    setFullname(event){
        this.setState({fullname : event.target.value});
    }
    setUsername(event){
        this.setState({username : event.target.value});
    }
    setEmail(event){
        this.setState({email : event.target.value});
    }
    setLocation(event){
        this.setState({location : event.target.value});
    }
    setZip(event){
        this.setState({zip : event.target.value});
    }
    render(){
        return (
            <div>
            <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label htmlFor="inputFullname">Full Name</label>
                        <input type="text" class="form-control" id="inputFullname" onChange={this.setFullname} value={this.state.fullname} />
                        </div>
                        <div class="form-group col-md-6">
                        <label htmlFor="inputEmail">Email</label>
                        <input type="email" class="form-control" id="inputEmail" onChange={this.setEmail} value={this.state.email} />
                        </div>
                    </div>
                    <div class="form-group">
                        <label htmlFor="inputUsername">UserName</label>
                        <input type="text" class="form-control" id="inputUsername" onChange={this.setUsername} value={this.state.username}/>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label htmlFor="inputCity">City</label>
                        <input type="text" class="form-control" id="inputCity" onChange={this.setLocation} value={this.state.location} />
                        </div>
                        <div class="form-group col-md-2">
                        <label htmlFor="inputZip">Zip</label>
                        <input type="text" class="form-control" id="inputZip" onChange={this.setZip} value={this.state.zip}/>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                        <label class="form-check-label" htmlFor="gridCheck">
                            Subscribe To our offers
                        </label>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-success">Update</button>
                    </form>
            </div>
        );
    }
}

export default ProfileInfo;