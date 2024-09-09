import PropTypes from 'prop-types';
import {  useUpdatePostsMutation,  } from './postsSlice';

const UpdatePost = ({edit}) => {
    const [updatePost] = useUpdatePostsMutation();
    const handleEdit = async(e) => {
        e.preventDefault();
        const post = {
            title : e.target.title.value,
            body : e.target.body.value,
        }
         try {
            await updatePost({id : edit.id,post})
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
             <form onSubmit={handleEdit}>
                <input type="text" defaultValue={edit.title}  name="title"/>
                <input type="text" defaultValue={edit.body}  name="body"/>
                <button type="submit">Update Post</button>
            </form>
        </div>
    );
};

UpdatePost.propTypes = {
    edit : PropTypes.object
}
export default UpdatePost;