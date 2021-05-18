import {Link } from 'react-router-dom';
import Oath from '../Oath'
import {FaEye, FaEyeSlash, FaExclamationTriangle} from 'react-icons/fa';
import {useState} from 'react';




const animate = (e)=>{
    e.target.parentElement.classList.add('animate');
}

    // --------validate form data at front end
    
    
let isFormValid = false
const validateForm = (e)=>{
    // -------prevent form from submiting
    e.preventDefault();
    const formTarget = e.target;
    const inputs = formTarget.querySelectorAll('input');
    if(inputs[0].value === ''){
        
        const showError = inputs[0].nextElementSibling;
        inputs[0].nextElementSibling.style.visibility = "visible";
        showError.parentElement.classList.add('warnBorder');
        setTimeout(()=>{
            inputs[0].nextElementSibling.style.visibility = "hidden";
            showError.parentElement.classList.remove('warnBorder');
            inputs[0].parentElement.classList.add('animate');
            
        }, 2000)
        inputs[0].focus();
    }


    // perform regular expression on email field to check if it is valid

    else if(inputs[1].value === ''){
        const showError = inputs[1].nextElementSibling;
        inputs[1].nextElementSibling.style.visibility = "visible";
        showError.parentElement.classList.add('warnBorder');
        inputs[1].parentElement.classList.add('animate');
        setTimeout(()=>{
            inputs[1].nextElementSibling.style.visibility = "hidden";
            showError.parentElement.classList.remove('warnBorder');
            
        }, 2000)
        inputs[1].focus();
    }

    else if(inputs[2].value === ''){
        const showError = inputs[2].nextElementSibling.nextElementSibling;
        showError.style.visibility = "visible";
        showError.parentElement.classList.add('warnBorder');
        inputs[1].parentElement.classList.add('animate');
        setTimeout(()=>{
            showError.style.visibility = "hidden"
            showError.parentElement.classList.remove('warnBorder')
            // lowerBorder1.classList.add('animate');
            showError.parentElement.classList.remove('warnBorder')
        }, 2000)
        inputs[2].focus();
    }

    else if(inputs[3].value === ''){
        const showError = inputs[3].nextElementSibling.nextElementSibling;
        showError.style.visibility = "visible";
        showError.parentElement.classList.add('warnBorder');
        inputs[3].parentElement.classList.add('animate');
        setTimeout(()=>{
            showError.style.visibility = "hidden"
            showError.parentElement.classList.remove('warnBorder')
            // lowerBorder1.classList.add('animate');
            showError.parentElement.classList.remove('warnBorder')
        }, 2000)
        inputs[3].focus();
    }

    if(inputs[2].value !== inputs[3].value){
        const showError = inputs[3].nextElementSibling.nextElementSibling;
        showError.style.visibility = "visible";
        showError.parentElement.classList.add('warnBorder');
        inputs[3].parentElement.classList.add('animate');
        setTimeout(()=>{
            showError.style.visibility = "hidden"
            showError.parentElement.classList.remove('warnBorder')
            showError.parentElement.classList.remove('warnBorder')
        }, 2000)
    }
    
}




const Signup = () => {

     // set current state of the eye and tooltip for showing the password
     const [showingPsd, setShowingPsd] = useState(false);
     const [toolTip, setToolTip] = useState(false)


     // function toggle show and hide the password for the user
     // using the is_visible which is initially set to false
     let isVisible = false;
     const showPassword = (e)=>{
         const input = e.target.parentElement.firstElementChild;
         if(!isVisible){
             setShowingPsd(false);
             setToolTip(false);
             input.setAttribute("type", "text");
             isVisible = true;
         }else{
             input.setAttribute("type", "password");
             isVisible = false;
             setToolTip(true);
             setShowingPsd(true);
         }
         return isVisible;
     }


    return (
        <div className="loginContainer">
        <Link to="/"><div className="login-shadow"></div></Link>
        <form method="POST" onSubmit={validateForm}>
            <div className="title">Please login to continue...</div>
            <div className="inputWrapper">
                <input onFocus={animate} type="text" name ="u_name" autoComplete="on" placeholder="enter name..."/>
                <div className="wrongPassword inputText"><span className="nameWarn">please enter name</span><FaExclamationTriangle /></div>
                <div className="inputAnimator"></div>
            </div>
            <div className="inputWrapper">
                <input onFocus={animate} type="mail" name ="u_email" autoComplete="on" placeholder="enter email..."/>
                <div className="wrongPassword inputText"><span className="nameWarn">please enter your email</span><FaExclamationTriangle /></div>
                <div className="inputAnimator"></div>
            </div>
            
            <div className="inputWrapper">
                <input onFocus={animate} type="password" name ="u_psd" placeholder="password..."/>
                <div onClick = {showPassword}  className="showPassword">{showingPsd?<FaEyeSlash />:<FaEye />}<span className="tooltiptext">{toolTip?'hide':'show'}</span></div>
                <div className="wrongPassword"><FaExclamationTriangle /></div>
                <div className="inputAnimator"></div>
            </div>
            <div className="inputWrapper">
                <input onFocus={animate} type="password" name ="confirm_u_psd" placeholder="confirm password..."/>
                <div onClick = {showPassword}  className="showPassword">{showingPsd?<FaEyeSlash />:<FaEye />}<span className="tooltiptext">{toolTip?'hide':'show'}</span></div>
                <div className="wrongPassword inputText"><span className="nameWarn">passwords don't match...</span><FaExclamationTriangle /></div>
                <div className="wrongPassword"><FaExclamationTriangle /></div>
                <div className="inputAnimator"></div>
            </div>


            <div>
                <Oath />
            </div>
            <input type="submit" className="login" value="Sign up"/>
            <div className="forgotpsd">Already have an account?
            <Link to="/login"> click here</Link> to login</div>
            <div className="forgotpsd create">by signing up you agree to our
                <Link to="/create-account"> privacy policies</Link> and our <br />
                <Link to="/create-account"> terms and conditions</Link>
            </div>
        </form>
    </div>
    )
}

export default Signup
