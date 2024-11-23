import { Link } from "react-router-dom";
import creator_image from '/images/creator_image.png';
import chat from '/images/chat.png';
import upload from '/icons/upload.png';
import pen from '/icons/Pen.png';
import video1 from '/images/video1.png';
import play from '/icons/play.png';
import playdark from '/icons/playdark.png';
import line from '/images/line.png';
import ebook1 from '/images/ebook1.png';
import ebook2 from '/images/ebook2.png';
import ebook3 from '/images/ebook3.png';
import image1 from '/images/image1.png';
import image2 from '/images/image2.png';
import facebook from '/icons/facebook.png';
import twitter from '/icons/twitter.png';
import instagram from '/icons/instagram.png';
import youtube from '/icons/youtube.png';


export const Creatordashboard = () => {
    return (
        <div className="creator">

            <div>
            <img src={creator_image} alt="" className="creator-image"/>
            <img src={chat} alt="" className="chat"/>
            </div>

            <div>
                <div>
                <Link to="/uploadingvideo">
                    <div className="upload-frame"></div>
                    <img src={upload} alt="" className="upload-icon"/>
                    <h3 className="title1">Upload Course</h3>
                </Link>
                </div>

                <div className="creator-group2">
                <Link to="/uploadingbook">
                    <div className="upload-frame">
                    <img src={upload} alt="" className="upload-icon2"/>
                    <h3 className="upload-ebook">Upload E-book</h3>
                    </div>
                </Link>
                </div>

                <div className="creator-group3">
                <Link to="/writeblog">
                    <div className="upload-frame">
                    <img src={pen} alt="" className="upload-icon3"/>
                    <h3 className="write-blog">Write a Blog</h3>
                    </div>
                </Link>
                </div>
            </div>

            <div>
            <h3 className="title3">My Courses</h3>
            <img src={line} alt="" className="line1"/>
            <div className="relative flex gap-7">
                <div className="libraryframe1">
                <a href="/course"><img src={video1} className="video1" alt="home video" /></a>
                <img src={play} className="playicon" alt="play icon" />
                <h2 className="librarytitle1">Mastering HOS Compliance<br/>for Truckers</h2>
                <h3 className="librarytitle2">John Smith, HOS Compliance Expert</h3>
                <img src={playdark} className="playdarkicon" alt="play icon" />
                <h3 className="librarytitle3">1H 20M</h3>
                <a href="/buyingcourse"><button className="buynowbutton">Edit Content</button></a>
                <a href="/course"><button className="previewbutton">Preview</button></a>
                </div>

                <div className="libraryframe1">
                <a href="/course"><img src={video1} className="video1" alt="home video" /></a>
                <img src={play} className="playicon" alt="play icon" />
                <h2 className="librarytitle1">Mastering HOS Compliance<br/>for Truckers</h2>
                <h3 className="librarytitle2">John Smith, HOS Compliance Expert</h3>
                <img src={playdark} className="playdarkicon" alt="play icon" />
                <h3 className="librarytitle3">1H 20M</h3>
                <a href="/buyingcourse"><button className="buynowbutton">Edit Content</button></a>
                <a href="/course"><button className="previewbutton">Preview</button></a>
                </div>

                <div className="libraryframe1">
                <a href="/course"><img src={video1} className="video1" alt="home video" /></a>
                <img src={play} className="playicon" alt="play icon" />
                <h2 className="librarytitle1">Mastering HOS Compliance<br/>for Truckers</h2>
                <h3 className="librarytitle2">John Smith, HOS Compliance Expert</h3>
                <img src={playdark} className="playdarkicon" alt="play icon" />
                <h3 className="librarytitle3">1H 20M</h3>
                <a href="/buyingcourse"><button className="buynowbutton">Edit Content</button></a>
                <a href="/course"><button className="previewbutton">Preview</button></a>
                </div>
            </div>
            </div>

            <div>
            <h3 className="title6">My Books</h3>
            <img src={line} alt="" className="line2"/>
            <div className="books-group">
              <div>
                <a href="/bookreading"><img src={ebook1} className="image1" alt="" /></a>
                <h3 className="title4">Books</h3>
                <h3 className="title5">HOS Guidelines</h3>
                <p className="paragraph2">Dive into the intricacies of Hours of Service rules,
                gain practical insights, and enhance your compliance for safer and more
                efficient trucking.</p>
                <button className="edit-button">Edit Content</button>
                <button className="previewbutton2">Preview</button>
              </div>

              <div>
                <a href="/bookreading"><img src={ebook2} className="image1" alt="" /></a>
                <h3 className="title4">Books</h3>
                <h3 className="title5">HOS Guidelines</h3>
                <p className="paragraph2">Dive into the intricacies of Hours of Service rules,
                gain practical insights, and enhance your compliance for safer and more
                efficient trucking.</p>
                <button className="edit-button">Edit Content</button>
                <button className="previewbutton2">Preview</button>
              </div>

              <div>
                <a href="/bookreading"><img src={ebook3} className="image1" alt="" /></a>
                <h3 className="title4">Books</h3>
                <h3 className="title5">HOS Guidelines</h3>
                <p className="paragraph2">Dive into the intricacies of Hours of Service rules,
                gain practical insights, and enhance your compliance for safer and more
                efficient trucking.</p>
                <button className="edit-button">Edit Content</button>
                <button className="previewbutton2">Preview</button>
              </div>

              <div>
                <a href="/bookreading"><img src={ebook1} className="image1" alt="" /></a>
                <h3 className="title4">Books</h3>
                <h3 className="title5">HOS Guidelines</h3>
                <p className="paragraph2">Dive into the intricacies of Hours of Service rules,
                gain practical insights, and enhance your compliance for safer and more
                efficient trucking.</p>
                <button className="edit-button">Edit Content</button>
                <button className="previewbutton2">Preview</button>
              </div>
            </div>
            </div>

            <div>
            <h3 className="title7">My Articles</h3>
            <img src={line} alt="" className="line3"/>
            <div className="articles-group">
              <div>
                <a href="/articlereading"><img src={image1} className="image2" alt="" /></a>
                <h3 className="title8">Articles</h3>
                <h3 className="title9">The Importance of<br />HOS Regulations in<br />Ensuring Road ...</h3>
                <p className="paragraph3">Dive into the intricacies of Hours of Service rules,
                gain practical insights, and enhance your compliance for safer and more
                efficient trucking.</p>
                <button className="edit-button2">Edit Content</button>
                <a href="/articlereading"><button className="previewbutton3">Preview</button></a>
              </div>

              <div>
                <a href="/articlereading"><img src={image2} className="image2" alt="" /></a>
                <h3 className="title8">Articles</h3>
                <h3 className="title9">The Importance of<br />HOS Regulations in<br />Ensuring Road ...</h3>
                <p className="paragraph3">Dive into the intricacies of Hours of Service rules,
                gain practical insights, and enhance your compliance for safer and more
                efficient trucking.</p>
                <button className="edit-button2">Edit Content</button>
                <a href="/articlereading"><button className="previewbutton3">Preview</button></a>
              </div>

              <div>
                <a href="/articlereading"><img src={image1} className="image2" alt="" /></a>
                <h3 className="title8">Articles</h3>
                <h3 className="title9">The Importance of<br />HOS Regulations in<br />Ensuring Road ...</h3>
                <p className="paragraph3">Dive into the intricacies of Hours of Service rules,
                gain practical insights, and enhance your compliance for safer and more
                efficient trucking.</p>
                <button className="edit-button2">Edit Content</button>
                <a href="/articlereading"><button className="previewbutton3">Preview</button></a>
              </div>

              <div>
                <a href="/articlereading"><img src={image2} className="image2" alt="" /></a>
                <h3 className="title8">Articles</h3>
                <h3 className="title9">The Importance of<br />HOS Regulations in<br />Ensuring Road ...</h3>
                <p className="paragraph3">Dive into the intricacies of Hours of Service rules,
                gain practical insights, and enhance your compliance for safer and more
                efficient trucking.</p>
                <button className="edit-button2">Edit Content</button>
                <a href="/articlereading"><button className="previewbutton3">Preview</button></a>
              </div>
            </div>
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
            </div>
        </div>
    )
}