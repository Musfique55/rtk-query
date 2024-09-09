import {  useDeletePostMutation,  usePostsApiQuery } from "./postsSlice";
import PropTypes from 'prop-types';
const PostsView = ({setEdit}) => {
    const {data,isError,isLoading} = usePostsApiQuery();
    const [deletePosts] = useDeletePostMutation();
    const handleDelete = async(id) => {
       await deletePosts(id);
    }
    
    return (
        <div>
            <h2>All Posts</h2>
                {isLoading && <p>Loading....</p>}
                {isError && <p>Something Error</p>}
            <section className="card-container">
                {
                   data?.length > 0 && data.map((post) => {
                    return <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <button onClick={() => setEdit(post)}>Edit</button>
                        <button onClick={() => handleDelete(post.id)}>Delete</button>
                    </div>
                   })
                }
            </section>
        </div>
    );
};

PostsView.propTypes = {
    setEdit : PropTypes.func
}
export default PostsView;