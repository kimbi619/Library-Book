import Oath from './Oath';
import './Login_signup.css';
import { Link } from 'react-router-dom';

 

const animate = (e)=>{
    e.target.parentElement.classList.add('animate');
}
const Login = () => {

    return (
        <div className="loginContainer">
            <Link to="/"><div className="login-shadow"></div></Link>
            <form method="POST">
                <div className="title">Please login to continue...</div>
                <div className="inputWrapper">
                    <input onFocus={animate} type="text" name ="u_name" autoComplete="off" placeholder="enter user name..."/>
                    <div className="inputAnimator"></div>
                </div>
                <div className="inputWrapper">
                    <input onFocus={animate} type="text" name ="u_name" autoComplete="off" placeholder="enter user name..."/>
                    <div className="inputAnimator"></div>
                </div>
                <div>
                    <Oath />
                </div>
                <input type="submit" className="login" value="Login"/>
                <div className="forgotpsd"><a href="#forgotpassword">Forgot password?.</a> Click the link to reset</div>
                <div className="forgotpsd create">if you don't have an account
                <Link to="/create-account"> click here</Link> to create one</div>
            </form>
        </div>
    )
}

export default Login
