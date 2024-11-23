import { useState } from 'react'
import { Link } from "react-router-dom";
//import { Leaderboard } from "./leaderboard";
import facebook from '/icons/facebook.png';
import twitter from '/icons/twitter.png';
import instagram from '/icons/instagram.png';
import youtube from '/icons/youtube.png';
import clarence from '/images/clarence.png';
import advertise_image from '/images/advertise_image.png';
import line from '/images/line.png';
import chat from '/images/chat.png';
import dropdown_icon from '/icons/dropdown_icon.png';
import full_screen_icon from '/icons/full_screen_icon.png';

export const Uploadad = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className="upload">
            <div>
                <div>
                    <h3 className="profile-name">John Doe</h3>
                    <img src={clarence} alt="" className="profile-pic"/>
                </div>
            </div>

            <div>
                <div>
                <img src={advertise_image} alt="" className="advertise-image"/>
                    <h2 className="title1">Connect Directly with Certified HOS Drivers. Expand Your<br/>
                    Reach, Grow Your Business</h2>
                </div>

                <div>
                    <h3 className="title2">Upload your Ad Now</h3>
                    <img src={line} alt="" className="line"/>
                    <img src={chat} alt="" className="chat"/>
                </div>

                <div>
                    <div className="frame1">
                        <div>
                        <textarea name="text" className="ad-title" placeholder="Title " maxLength={93}/>
                        <h3 className="word-number">93</h3>
                        </div>

                        <div>
                        <textarea name="text" className="ad-description" placeholder="Description" maxLength={200}/>
                        <h3 className="word-number2">200</h3>
                        </div>

                        <div>
                        <textarea name="text" className="ad-blog" placeholder="Upload Blog" />
                        </div>

                        <div>
                        <input type="number" className="ad-number" placeholder="How Many Ads" />
                        </div>

                        <div>
                        <input type="text" className="ad-choose-banner" placeholder="Choose Banner" />
                        <img src={dropdown_icon} alt="" className="dropdown-icon"/>
                        </div>

                        <div>
                        <input type="text" className="ad-choose-dimensions" placeholder="Choose Dimensions" />
                        <img src={dropdown_icon} alt="" className="dropdown-icon2"/>
                        </div>

                        <div>
                        <input type="text" className="ad-choose-size" placeholder="Large" />
                        <img src={dropdown_icon} alt="" className="dropdown-icon3"/>
                        </div>

                        <div>
                        <input type="text" className="ad-amount" placeholder="$1,000" />
                        </div>

                        <div>
                            <div>
                                <div>
                            <div onClick={() => setOpen(true)}><button className="preview-button">Preview</button></div>
                            { open && (
                                <dl className="ads-preview-container">
                                    <h2>Ads Preview Content</h2>
                                </dl>
                            )}
                                </div>
                            </div>

                        <Link to="/adcheckout"><button className="pay-now-button">Pay Now</button></Link>
                        </div>

                        <div>
                            <p className="paragraph">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing<br/>elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex<br/>ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat<br/>cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="frame2"></div>
                <div>
                    <h3 className="title3">ADS Preview</h3>
                </div>
                <h3 onClick={() => setOpen(false)} className="close">X</h3>
                <img src={full_screen_icon} alt="" className="full-screen"/>
            </div>

            <div>
                <div className="footer2"></div>

                <div className="aboutusgroup">
                <Link to="/contactus"><h3 className="footerlinks">Contact Us</h3></Link>
                <h3 className="footerlinks">Terms of Service</h3>
                <h3 className="footerlinks">Privacy Policy</h3>
                </div>

                <div className="social-links">
                <img src={facebook} alt="for facebook link" className="facebook-icon" height="24px" />
                <img src={twitter} alt="for facebook link" className="twitter-icon" height="24px" />
                <img src={instagram} alt="for facebook link" className="instagram-icon" height="24px" />
                <img src={youtube} alt="for facebook link" className="youtube-icon" height="24px" />
                </div>

                <div>
                <h3 className="rights">@2024 Rights are Reserved by HOSOptima.com</h3>
                </div>

                <button className="signup-button">Sign up</button>
            </div>
        </div>
    )
}