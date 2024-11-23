import { useContext, useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import SideBar from "../components/SideBar";
import { createPost as doCreatePost } from "../services/post-service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { AlertContext } from "../context/alert";
import { EventInfo } from "ckeditor5";
import { showAlert } from "../core/function";
import { AlertDuration, AlertType } from "../core/enums";
import { BlogStruct } from "../core/interface";
import { AxiosError } from "axios";

export const Writeblog = () => {
    const alertContext = useContext(AlertContext);
    const [error, setError] = useState<string | null>(null)
    const [isLoaded, setIsLoaded] = useState(true);
    const [post, setPost] = useState<BlogStruct>({
        title: '',
        keywords: '',
        description: '',
        content: '',
        status: 'published',
    })

    const fieldChanged = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        //console.log(event)
        setPost({ ...post, [event.target.name]: event.target.value })
    }

    const contentFieldChanged = (_event: EventInfo, editor: ClassicEditor) => {
        const data = editor.getData();

        setPost({
            ...post,
            content: data
        });
    }

    const createPost = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoaded(false);

        if (!post.title) setError("Blog Title is required");
        if (!post.description) setError("Description is required");
        if (!post.content) setError("Blog Content is required");
        if (!post.keywords) setError("Keywords is required for Optimization");
        
        if(error){
            showAlert({
                context: alertContext,
                title: '',
                message: error,
                type: AlertType.ERROR,
                duration: AlertDuration.MEDIUM,
                transform: {
                    x: 100,
                    y: 0,
                    width: 'fit-content',
                }
            });
            setIsLoaded(true);
            return;
        }

        //post['userId'] = user.id
        doCreatePost(post).then((data) => {
            showAlert({
                context: alertContext,
                title: '',
                message: data.message ?? 'Blog Post created successfully',
                type: AlertType.SUCCESS,
                duration: AlertDuration.MEDIUM,
                transform: {
                    x: 100,
                    y: 0,
                    width: 'fit-content',
                }
            });
            setPost({
                title: '',
                keywords: '',
                description: '',
                content: '',
                status: 'published',
            });
            setIsLoaded(true);
        }).catch((error: AxiosError) => {
            showAlert({
                context: alertContext,
                title: '',
                message: (error.response && (error.response.data as {[message : string] : string})?.message) ?? 'Unable to create Blog Post, Try again later',
                type: AlertType.ERROR,
                duration: AlertDuration.MEDIUM,
                transform: {
                    x: 100,
                    y: 0,
                    width: 'fit-content',
                }
            });
            setIsLoaded(true);
        });
    }

    return (
        <>
            <SideBar />
            <div className="writeblog flex flex-col">
                <h3 className="title mt-[100px]">Create Blog</h3>
                <form className="flex flex-col justify-start items-start mt-[50px]" onSubmit={createPost}>
                    <div className="flex w-full gap-[20px]">
                        <div className="flex flex-col items-start w-full">
                            <span className="mb-[10px] text-[12px]">Blog Title</span>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                className="title-input w-full"
                                placeholder="Blog title"
                                value={post.title}
                                onChange={fieldChanged}
                            />
                        </div>
                        <div className="flex flex-col items-start w-full">
                            <span className="mb-[10px] text-[12px]">Keywords</span>
                            <input
                                type="text"
                                id="keywords"
                                name="keywords"
                                className="title-input w-full"
                                placeholder="Keywords - Seperate with a comma"
                                value={post.keywords}
                                onChange={fieldChanged}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-start w-full mt-[30px]">
                        <span className="mb-[10px] text-[12px]">Description</span>
                        <textarea
                            name="description"
                            className="description-input text-[12px]"
                            placeholder="Enter Blog Summary Description"
                            value={post.description}
                            onChange={fieldChanged}
                        />
                    </div>
                    <div className="flex flex-col items-start w-full mt-[30px]">
                        <span className="mb-[10px] text-[12px]">BlogPost</span>
                        <CKEditor
                            editor={ClassicEditor}
                            onChange={contentFieldChanged}
                            data={post.content}
                            config={{
                                toolbar: ['heading', '-', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', 'undo', 'redo', ],
                            }}
                        />
                    </div>
                    <button type="submit" className="post-button hosbutton flex items-center mt-[30px]" disabled={!post.title || !post.content || !post.description || !post.keywords || !isLoaded}>
                        {isLoaded == true ? <>
                            <FontAwesomeIcon 
                                icon={faPlusCircle}
                            />
                            <span className="ml-[10px]">Post Blog</span>
                        </> : <div className="spinner"></div>}
                    </button>
                </form>

                {/* <div>
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
                </div> */}
            </div>
        </>
    )
}