import { Link } from "react-router-dom";
import axios, { AxiosRequestConfig, AxiosProgressEvent } from "axios";
import React, { useState } from "react";
import chat from '/images/chat.png';
import dropdown_icon from '/icons/dropdown_icon.png';
import upload from '/icons/upload.png';
import facebook from '/icons/facebook.png';
import twitter from '/icons/twitter.png';
import instagram from '/icons/instagram.png';
import youtube from '/icons/youtube.png';
import SideBar from "../components/SideBar";

export const Uploadingbook = () => {

    const [file, setFile] = useState<File | undefined>();
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploadedFileURL, setUploadedFileURL] = useState(null);
    const [post, setPost] = useState({
        title: '',
        description: '',
    })

    const fieldChanged = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPost({ ...post, [event.target.name]: event.target.value })
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files) {
            setFile(event.target.files[0]);
        }
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (typeof file === 'undefined') return;

        const url = 'http://localhost:3000/uploadfile';
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', file.name);
        const config : AxiosRequestConfig = {
            headers: {
                'content-type': 'multipart/form-data',
            },
            onUploadProgress: function (progressEvent: AxiosProgressEvent) {
                const percentCompleted = progressEvent.total ? Math.round((progressEvent.loaded * 100) / progressEvent.total) : 0;
                setUploadProgress(percentCompleted);
            }
        };

        axios.post(url, formData, config).then((response) => {
            console.log(response.data)
            setUploadedFileURL(response.data.fileUrl);
            console.log(response.data)
        }).catch((error) => {
            console.error("Error uploading file: ", error);
        });
    }

    return (
        <>
            <SideBar />
            <div className="uploadingbook">
                <form onSubmit={handleSubmit}>
                    <div>
                        <h3 className="title1">Book</h3>
                        <img src={chat} alt="" className="chat" />
                        <input type="text" className="course-input" placeholder="Book Name" />
                        <input type="text" className="audience-input" placeholder="Public" />
                        <img src={dropdown_icon} alt="" className="dropdown-icon" />
                    </div>

                    <div>
                        <input
                            type="file"
                            name="book"
                            onChange={handleChange}
                            className="upload-frame"
                        />
                        <img src={upload} alt="" className="upload-icon" />
                        <h3 className="title2">Upload Book</h3>
                    </div>

                    <div>
                        <h3 className="title4">Add Book Title</h3>
                        <input
                            type="text"
                            name="title"
                            className="video-input"
                            placeholder="Add Book Title"
                            onChange={fieldChanged}
                        />
                    </div>

                    <div>
                        <h3 className="title5">Add Book Description</h3>
                        <textarea
                            name="description"
                            className="description-input"
                            placeholder="Write your ideas here"
                            onChange={fieldChanged}
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="post-button">
                            Post
                        </button>
                        <progress value={uploadProgress} max="100"></progress>
                    </div>
                </form>
                {uploadedFileURL && <img src={uploadedFileURL} alt="Uploaded content" />}
                {/* {error && <p>Error uploading file: {error.message}</p>} */}

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
        </>

    )
}