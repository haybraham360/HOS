import { Link } from "react-router-dom";
import chat from '/images/chat.png';
import dropdown_icon from '/icons/dropdown_icon.png';
import upload from '/icons/upload.png';
import upload_white from '/icons/upload_white.png';
import facebook from '/icons/facebook.png';
import twitter from '/icons/twitter.png';
import instagram from '/icons/instagram.png';
import youtube from '/icons/youtube.png';

export const Uploadingvideo = () => {
    return (
        <div className="uploading">

            <form>
                <div>
                    <h3 className="title1">Course</h3>
                    <img src={chat} alt="" className="chat" />
                    <input type="text" className="course-input" placeholder="Course Name" />
                    <input type="text" className="audience-input" placeholder="Public" />
                    <img src={dropdown_icon} alt="" className="dropdown-icon" />
                </div>

                <div>
                    <input type="file" className="upload-frame" />
                    <img src={upload} alt="" className="upload-icon" />
                    <h3 className="title2">Upload Course</h3>
                </div>

                <div>
                    <button className="upload-another-button">Upload Another Video</button>
                    <img src={upload_white} alt="" className="upload-white" />
                </div>

                <div>
                    <h3 className="title4">Add Video Title</h3>
                    <input type="text" className="video-input" placeholder="Add Video Title" />
                </div>

                <div>
                    <h3 className="title5">Add Video Description</h3>
                    <textarea name="text" className="description-input" placeholder="Write your ideas here" />
                </div>
                <div>
                    <button className="post-button">Post</button>
                </div>
            </form>

            <div>
                <div className="footer2">
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
                </div>
            </div>
        </div>
    )
}