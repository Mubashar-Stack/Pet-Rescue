import  { useState } from 'react';
import Axios from 'axios'
const Login = () => {


    const [usernamereg,setusernanmereg] = useState('')
    const [passwordreg,setpasswordreg] = useState('')
    const [rolereg, setrolereg] = useState('')

    

    const login = () => {
        console.log({ 
            email:usernamereg, 
            password:passwordreg, 
            role: rolereg, });
        Axios.post('https://3001-amaranth-crayfish-4lr7o7b0.ws-eu03.gitpod.io/login',{ 
            email:usernamereg, 
            password:passwordreg, 
            role: rolereg, }).then ( (response) => {
               console.log(response); 
            })
    };

    return (
        <div>
            <div class="jumbotron jumbotron-fluid overlay">
                <div class="jumbo-heading">

                    <div class="section-heading" data-aos="zoom-in">
                        <h1>Login/Register</h1>
                    </div>

                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.phtml">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Login/Register</li>
                        </ol>
                    </nav>
                </div>

            </div>

            <div class="page pb-0">
                <div class="container">
                    <div class="row">

                        <div class="contact-info col-lg-5">
                            <h4>Login!</h4>

                            <div id="contact_form">
                                <div class="form-group">
                                    <div class="row">

                                        <div class="col-md-12">
                                            <label>Email Adress <span class="required">*</span></label>
                                            <input type="email" name="email" class="form-control input-field" required=""  onChange={ (e) =>{ setusernanmereg(e.target.value) } } />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <label>Password</label>
                                            <input type="password" name="subject" class="form-control input-field"  onChange={ (e) =>{ setpasswordreg(e.target.value) } } />
                                        </div>
                                        <div class="col-md-12">
                                            <label>Role<span class="required">*</span>:User,Moderator,Admin</label>
                                            <input type="text" name="role" class="form-control input-field" required=""  onChange={ (e) =>{ setrolereg(e.target.value) } } />
                                        </div>
                                    </div>
                                    <button type="submit" id="submit_btn" value="Submit" class="btn btn-primary" onClick={login}>Login</button>
                                </div>

                                <div id="contact_results"></div>
                            </div>

                        </div>


                        <div class="contact-info col-lg-5 offset-lg-1 h-50 res-margin">
                            <h4>Registration!</h4>

                            <div id="contact_form">
                                <div class="form-group">
                                    <div class="row">

                                        <div class="col-md-12">
                                            <label>Email Adress <span class="required">*</span></label>
                                            <input type="email" name="email" class="form-control input-field" required="" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <label>Password</label>
                                            <input type="password" name="subject" class="form-control input-field" />
                                        </div>
                                        <div class="col-md-12">
                                            <label>Role<span class="required">*</span></label>
                                            <select name="roles" id="roles" class="form-control input-field">
                                                <option value="user">User</option>
                                                
                                            </select>
                                        </div>
                                    </div>
                                    <button type="submit" id="submit_btn" value="Submit" class="btn btn-primary">Login</button>
                                </div>

                                <div id="contact_results"></div>
                            </div>

                        </div>


                    </div>

                </div>

            </div>
        </div>

    )
}

export default Login
