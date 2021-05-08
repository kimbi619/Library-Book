import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GitHubLogin from 'react-github-login'



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
                buttonText=" "
                cookiePolicy="single_host_origin"
                onSuccess ={responseGoogle}
                onFailure = {responseGoogle}
                isSignedIn={true}
                redirectUri = "http://localhost:3000/allbooks"
            />
            <GitHubLogin
                clientId="ebabb999fd6c012263c3"
                clientSecret = "d699c64bd79cd6798ed00c192bcf7cdd08c226fc"
                redirectUri = "http://localhost:3000/allbooks"
                buttonText = "continue with gitHub"
                onSuccess = {onSuccess}
                onFailure = {onFailure}

            />

            <FacebookLogin
                appId="904733433703226"
                autoLoad={false}
                // fields="name,email,picture"
                callback={responseFacebook}
                render={renderProps => (
                    <button onClick={renderProps.onClick} className = "fb-btn">f</button>
                  )}
            />
        </div>
    )
}

export default Oath
