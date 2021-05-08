import {Link } from 'react-router-dom';
import Oath from '../Oath'

const Signup = () => {
    return (
        <div>
            <div className="signup loginContainer">
            <Link to="/"><div className="login-shadow"></div></Link>
            <form method="POST">
                <div className="title">create an account to continue...</div>
                <input type="text" name ="name" placeholder="Full name"/>
                <input type="text" name ="u_name" placeholder="user name..."/>
                <input type="password" name = "u_psd" placeholder="password..."/>
                <input type="password" name = "c_u_psd" placeholder="confirm password..."/>
                <div>
                    <Oath />
                </div>
                <input type="submit" className="login" value="create account"/>
                <div className="forgotpsd create">you already have an account?.
                <Link to="/login"> login</Link></div>
            </form>
        </div>
        </div>
    )
}

export default Signup
