import React from 'react'
import PropTypes from 'prop-types'
import './Home.css'
import SignIn from './SignIn'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Home(props) {
    return (
      <div className="container-fluid">
      <Router>
        <div className="row no-gutter">
          <div className="col-md-6 d-none d-md-flex bg-image">
            <h2 className="row">Our Features</h2>
            
          </div>

          <div className="col-md-6 bg-light">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <img
                      alt="logo"
                      className="brand-logo"
                      width="60%"
                      src="https://www.ownerandtenant.com/assets/Logo12.svg"
                    />

                    <p className="text-muted mb-4">
                    <Link to="/sign-in">
                      <a href="#">Sign-In</a>
                      </Link>
                    </p>
                    <form>
                      <div className="form-group mb-3">
                        
                          <label>Enter Email or Mobile Number</label>
                          <input type="text" class="form-control input-lg" />
                        
                      </div>

                      <div className="text-center d-flex justify-content-between mt-4">
                        <button className="login-otp">Login with OTP</button>
                        <button className="login-password">Login with Password</button>
                      </div>
                    </form>
                  </div>
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <Switch>
                    <Route path="/sign-in">
                      <SignIn/>
                    </Route>
                  </Switch>
                  
        </Router>
      </div>
    );
}

Home.propTypes = {

}

export default Home

