import GoogleLogin from 'react-google-login';
import facebookIcon from './icons/facebookIcon.svg'
import githubIcon from './icons/githubIcon.svg'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GitHubLogin from 'react-github-login'
import { FaGoogle } from 'react-icons/fa';



const Oath = () => {
    const responseGoogle=(response)=>{
        console.log(response.profileObj);
    }
    const responseFacebook = (response)=>{
        console.log(response.profileObj);
    }
    const componentClicked = ()=>{
        console.log('clicking');
    }

    const onSuccess = response =>{
        console.log(response);
    }
    const onFailure = response =>{
        console.log(response);
    }
    return (
        <div className="oath">
            <GoogleLogin
                clientId="619358641730-0h0cmc2tcoks4cc2fuhlstgr9sks5no4.apps.googleusercontent.com"
                render={renderProps => (
                <button className="btn-google" onClick={renderProps.onClick} disabled={renderProps.disabled}><FaGoogle /></button>
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />

            <GitHubLogin
                clientId="ebabb999fd6c012263c3"
                clientSecret = "d699c64bd79cd6798ed00c192bcf7cdd08c226fc"
                redirectUri = "http://localhost:3000/allbooks"
                className = 'git-btn'
                onSuccess = {onSuccess}
                onFailure = {onFailure}
                buttonText = {<img src={githubIcon} alt="git" />}
                render={renderProps => (
                    <button className="btn-google" onClick={renderProps.onClick} disabled={renderProps.disabled}><img src="githubIcon" alt="github icon" /></button>
                )}

            />

            <FacebookLogin
                appId="904733433703226"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
                render={renderProps => (
                    <button onClick={renderProps.onClick} className = "fb-btn"><img src={facebookIcon} alt="facebook"/></button>
                  )}
            />
        </div>
    )
}

export default Oath
