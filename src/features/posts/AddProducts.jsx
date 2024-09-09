import { nanoid } from "@reduxjs/toolkit";
import {useAddPostsMutation} from './postsSlice.js';
const AddProducts = () => {
    const [addPosts] = useAddPostsMutation();
    const handleSubmit = async(e) => {
        e.preventDefault();
        const post = {
            title : e.target.title.value,
            body : e.target.body.value,
            id : nanoid()
        }
       await addPosts(post)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"  name="title"/>
                <input type="text"  name="body"/>
                <button type="submit">Add Post</button>
            </form>
        </div>
    );
};

export default AddProducts;