import React from 'react';
import './Login.css';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import GoogleButton from 'react-google-button'
import loginGif from '../../../images/loginGif.gif';


const Login = () => {

    const { signInUsingGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const redirect_url = location.state?.from || '/';

    const googleAccCreate = 'https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp'

    const handleGoogleLogin = () => {
        signInUsingGoogle()

            .then(result => {
                history.push(redirect_url);
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(errorCode);
                console.log(errorMessage);

            })
    }

    return (
        <div className="container-fluid ">
            <div className="row">
                <div className="col-md-4 ">
                    <div className="container">
                        <h4 className="mt-5">Log in to your account</h4>
                        <GoogleButton
                            onClick={() => handleGoogleLogin()}
                        />

                        <hr />

                        <p><small>Don't have an account? <a href={googleAccCreate} target="_blank">Sign Up</a></small></p>
                    </div>
                </div>
                <div className="col-md-8 px-0">
                    <div className="">
                        <img className="img-fluid w-100 " src={loginGif} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;