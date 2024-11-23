import { BlogStruct } from "../core/interface";
import { myAxios } from "./helper";

const createPost = (postData: BlogStruct) => {
    return myAxios.post(`/blog`, postData, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }).then(response => response.data);
};

export { createPost };