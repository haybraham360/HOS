import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect, useContext } from 'react';
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faXTwitter, faYoutube, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '/images/logo.png';
import logo_white from '/images/logo_white.png';
import loginimage from '/images/loginimage.png';
import curve_line from '/images/curve_line.png';
import female_worker from '/images/female_worker.png';
import male_worker from '/images/male_worker.png';
// import facebook_dark from '/icons/facebook_dark.png';
// import twitter_dark from '/icons/twitter_dark.png';
// import instagram_dark from '/icons/instagram_dark.png';
// import youtube_dark from '/icons/youtube_dark.png';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import axios, { AxiosError } from 'axios';
import { AlertContext } from '../context/alert';
import { AlertDuration, AlertType } from '../core/enums';
import { AlertProviderContext } from '../core/provider';
import { showAlert } from '../core/function';

const EMAIL_REGEX = /^(?=.*[a-z])(?=.*[@]).{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,15}$/;

export const AdminLogin = () => {
  const alertContext = useContext<AlertProviderContext | null>(AlertContext);
  const userRef = useRef<HTMLInputElement | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eye);

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eyeOff);
      setType('text');
    } else {
      setIcon(eye);
      setType('password');
    }
  };

  useEffect(() => {
    if (userRef.current !== null) {
      userRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
  }, [pwd]);

  const navigate = useNavigate();

  async function login() {
    setIsLoading(true);

    try {
      const result = await axios.post('https://api.hosoptima.com/api/v1/admin/auth/login', { email: email, password: pwd }, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        },
      );

      if (result.status == 200 || result.status == 201) {
        setIsLoading(false);

        const { data } = result.data;

        localStorage.setItem('token', data.token);
        localStorage.setItem('refreshToken', data.refreshToken);
        localStorage.setItem('user-info', JSON.stringify(data));

        navigate('/dashboard');
      }
    } catch (error) {
      setIsLoading(false);
      const err = error as AxiosError;

      showAlert({
        context: alertContext,
        type: AlertType.ERROR,
        title: '',
        message: (err.response && err.response.data && typeof (err.response.data as { message: string }).message === 'string' ? (err.response.data as { message: string }).message : "An error occurred, Cannot Login at the moment"),
        duration: AlertDuration.MEDIUM
      });

      // alertContext?.dispatch({
      //   type: AlertActionType.SHOW,
      //   payload: {
      //     title: '',
      //     message: 'An error occurred, Cannot Login at the moment',
      //     type: AlertType.ERROR,
      //     show: false,
      //   }
      // });
      // setAlert({
      //   show: true,
      //   message:
          // (err.response &&
          //   err.response.data &&
          //   (err.response.data as any).message) ||
      //     'An error occurred, Cannot Login at the moment',
      // });
    }
  }

  return (
    <div className="adminlogin">
      <div className="logo">
        <img src={logo_white} alt="image" height="28px" />
      </div>

      <div className='absolute w-full'>
        <img src={loginimage} alt="header images" className="login-image" />
      </div>

      <div className='absolute right-0 w-full'>
        <img src={curve_line} alt="curve" className="curveline" />
        <img src={female_worker} alt="curve" className="female-worker" />
        <img src={male_worker} alt="curve" className="male-worker" />
      </div>

      {/* <p className="welcomemessage">Welcome back, Admin!</p> */}

      <div className="wrapper">
        <div className="form-wrapper">
          <div className="flex flex-col items-start gap-[20px]">
            <img src={logo} alt="HOSOptima Logo" className='w-[150px]' />
            <div className="text-[#000] text-[20px] font-[500]">Login to Access Dashboard</div>
          </div>
          <form className='flex flex-col mt-[35px] gap-[28px]'>
            <div className='flex flex-col mt-28px gap-[10px]'>
              <div className="flex items-center gap-[2px]">
                <label>Email</label>
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validEmail ? 'valid' : 'hide'}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validEmail || !email ? 'hide' : 'invalid'}
                />
              </div>
              <input
                type="email"
                id="email"
                autoComplete="off"
                value={email}
                placeholder='Email Address'
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-invalid={validEmail ? 'false' : 'true'}
                aria-describedby="uidnote"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                className="email-input"
              />

              <p
                id="uidnote"
                className={
                  emailFocus && email && !validEmail
                    ? 'instructions'
                    : 'offscreen'
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                4 to 24 characters.
                <br />
                Must begin with a letter. <br />
                only lowercase is allowed. Allowed special characters: @
              </p>
            </div>

            <div className='flex flex-col mt-28px gap-[10px]'>
              <div className="flex items-center gap-[2px]">
                <label>Password</label>
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validPwd ? 'valid' : 'hide'}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validPwd || !pwd ? 'hide' : 'invalid'}
                />
              </div>

              <div className="flex tw-relative items-center w-full">
                <input
                  type={type}
                  id="password"
                  placeholder='Password'
                  className='w-full z-0'
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  autoComplete="new-password"
                  aria-invalid={validPwd ? 'false' : 'true'}
                  aria-describedby="pwdnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                  required
                />
                <Icon onClick={handleToggle}
                  className="absolute right-[52px] z-10 cursor-pointer text-[#000]"
                  icon={icon}
                  size={16}
                />
              </div>


              <p
                id="pwdnote"
                className={pwdFocus && !validPwd ? 'instructions' : 'offscreen'}
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 15 characters.
                <br />
                Must include uppercase and lowercase letters, a number and a
                special character.
                <br />
                Allowed special characters:{' '}
                <span aria-label="exclamation mark">!</span>{' '}
                <span aria-label="at symbol">@</span>{' '}
                <span aria-label="hashtag">#</span>{' '}
                <span aria-label="dollar sign">$</span>{' '}
                <span aria-label="percent">%</span>
              </p>
            </div>

            <button type="button" className='hosbutton mt-[10px] btn-primary' onClick={login} disabled={!validEmail || !validPwd || isLoading}>
              {isLoading ? <div className="spinner"></div> : <span>Login</span>}
            </button>
          </form>
        </div>

        <div className="contactgroup">
          <Link to="/contactus">
            <h3 className="contact">Contact Us</h3>
          </Link>
          <Link to="/termsofservice">
            <h3 className="terms">Terms of Service</h3>
          </Link>
          <Link to="/privacy">
            <h3 className="privacy">Privacy Policy</h3>
          </Link>
        </div>
        <div className="social-links">
          <FontAwesomeIcon
            icon={faFacebook}
            className="check-icon"
            size="2x"
          />
          <FontAwesomeIcon
            icon={faXTwitter}
            className="check-icon"
            size="2x"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="check-icon"
            size="2x"
          />
          <FontAwesomeIcon
            icon={faYoutube}
            className="check-icon"
            size="2x"
          />
        </div>
        <div>
          <h3 className="rights">
            © 2024 Rights are Reserved by HOSOptima.com
          </h3>
        </div>
      </div>
    </div>
  );
};
