import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '/images/logo.png';
import header_images from '/images/header_images.png';
import facebook_dark from '/icons/facebook_dark.png';
import twitter_dark from '/icons/twitter_dark.png';
import instagram_dark from '/icons/instagram_dark.png';
import youtube_dark from '/icons/youtube_dark.png';
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye';
import AdminProvider from "../provider/admin";

const USER_REGEX = /^[A-z][A-z0-9-_]{2,23}$/;
const EMAIL_REGEX = /^(?=.*[a-z])(?=.*[@]).{3,40}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,15}$/;

export const Adminsignup = () => {
    const userRef = useRef<HTMLInputElement | null>(null);
    const errRef = useRef<HTMLDivElement | null>(null);

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname]=useState("");

    const [firstnameIsValid, setfirstnameIsValid] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [validUsername, setValidUsername]=useState(false);
    const [usernameFocus, setUsernameFocus]=useState(false);

    const [email, setEmail]=useState("");
    const [validEmail, setValidEmail]=useState(false);
    const [emailFocus, setEmailFocus]=useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type==='password') {
      setIcon(eye);
      setType('text')
    } else {
      setIcon(eyeOff)
      setType('password')
    }
  }

    useEffect(() => {
        if(userRef.current !== null){
            userRef.current.focus();
          }
    }, [])

    useEffect(() => {
      setfirstnameIsValid(USER_REGEX.test(firstname));
    }, [firstname])

    useEffect(() => {
        setValidUsername(USER_REGEX.test(lastname));
    }, [lastname])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [firstname, pwd, matchPwd])

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(firstname);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
    }

const navigate = useNavigate();

async function register()
  {
   try {
    const adminProvider = new AdminProvider();
    const result= await adminProvider.register({
      firstName: firstname,
      lastName: lastname,
      email,
      password: pwd
    })
    // localStorage.setItem("firstname-info",JSON.stringify(data));

    if(result){
      setSuccess(true);
    }else{
      setSuccess(false);
    }

    console.log('====================================');
    console.log(result);
    console.log('====================================');
     navigate("/creatordashboard");
   } catch (error) {
    console.log('====================================');
    console.log(error);
    console.log('====================================');
    setSuccess(false);
   }
  }

    return (
        <div className="signup">
            <div className="logo">
            <img src={logo} alt="image"/>
            </div>

          <div>
            <img src={header_images} alt="header images" className="header-images"/>
          </div>

        <section>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <div className="wrapper">
         <div className="form-wrapper">
        <h1 className="signupheader">Admin Account</h1>

        <form onSubmit={handleSubmit}>
            <label htmlFor="firstname" className="name-label">
                Firstname
                <FontAwesomeIcon icon={faCheck} className={firstnameIsValid ? "valid" : "hide"} />
                <FontAwesomeIcon icon={faTimes} className={firstnameIsValid || !firstname ? "hide" : "invalid"} />
            </label>
            <input
                type="text"
                id="firstname"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setFirstname(e.target.value)}
                value={firstname}
                required
                aria-invalid={firstnameIsValid ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                className="name-input"
            />
            <p id="uidnote" className={userFocus && firstname && !firstnameIsValid ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                3 to 24 characters.<br />
                Must begin with a letter.<br />
                Letters, numbers, underscores, hyphens allowed.
            </p>

            <div>
                <label htmlFor="lastname" className="lastname-label">
                  Lastname
                  <FontAwesomeIcon icon={faCheck} className={validUsername ? "valid" : "hide"} />
                  <FontAwesomeIcon icon={faTimes} className={validUsername || !lastname ? "hide" : "invalid"} />
                  </label>
                <input
                type="text"
                id="lastname"
                name="lastname"
                autoComplete="off"
                value={lastname}
                onChange={(e)=>setLastname(e.target.value)}
                required
                aria-invalid={firstnameIsValid ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUsernameFocus(true)}
                onBlur={() => setUsernameFocus(false)}
                className="lastname-input"
                />
                <p id="uidnote" className={usernameFocus && firstname &&
                !validUsername ? "instructions" : "offscreen"}>
                  <FontAwesomeIcon icon={faInfoCircle} />
                  3 to 24 characters.<br />
                  Must begin with a letter. <br />
                  Letters, numbers, underscores, hyphens allowed.
                </p>
               </div>

               <div>
                <label htmlFor="email" className="email-label">
                  Email
                  <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                  <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
                  </label>
                <input
                type="text"
                id="email"
                name="email"
                autoComplete="off"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
                aria-invalid={validEmail ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                className="email-input"
                />
                <p id="uidnote" className={emailFocus && email &&
                !validEmail ? "instructions" : "offscreen"}>
                  <FontAwesomeIcon icon={faInfoCircle} />
                  4 to 40 characters.<br />
                  Must begin with a letter. <br />
                  only lowercase is allowed.
                  Allowed special characters: @
                </p>
               </div>

            <label htmlFor="password" className="password-label">
                Password
                <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
            </label>
            <input
                type={type}
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                autoComplete="new-password"
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
                className="password-input"
            />
            <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 15 characters.<br />
                Must include uppercase and lowercase letters, a number and a special character.<br />
                Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
            </p>
            <span className="items-center" onClick={handleToggle}>
                    <Icon className="absolute lg:ml-12 mt-19.4 z-10" icon={icon} size={20}/>
            </span>


            <label htmlFor="confirm_pwd" className="re-enterpassword-label">
                Confirm Password
                <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
            </label>
            <input
                type={type}
                id="confirm_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                value={matchPwd}
                required
                autoComplete="new-password"
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
                className="re-enterpassword-input"
            />
            <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                Must match the first password input field.
            </p>
            <span className="items-center" onClick={handleToggle}>
                    <Icon className="absolute lg:ml-12 mt-23 z-10" icon={icon} size={20}/>
            </span>

            <button
            disabled={!firstnameIsValid || !validPwd || !validMatch ? true : false}
            type="submit"
            onClick={register}
            className="signupbutton">Sign Up</button>

            <div>
              <p className="p">Already have an account? <Link to="/login"><span className="spanlogin">Login</span></Link></p>
            </div>

            {success}
        </form>
        </div>
       </div>
      </section>
      
      <div className="contactgroup">
                <Link to="/contactus"><h3 className="contact">Contact Us</h3></Link>
                <h3 className="terms">Terms of Service</h3>
                <h3 className="privacy">Privacy Policy</h3>
        </div>
        <div className="social-links">
            <img src={facebook_dark} alt="for facebook link" className="facebook-icon" height="20px" />
            <img src={twitter_dark} alt="for facebook link" className="twitter-icon" height="20px" />
            <img src={instagram_dark} alt="for facebook link" className="instagram-icon" height="20px" />
            <img src={youtube_dark} alt="for facebook link" className="youtube-icon" height="20px" />
        </div>
        <div>
            <h3 className="rights">© 2024 Rights are Reserved by HOSOptima.com</h3>
        </div>
    </div>
    )
}