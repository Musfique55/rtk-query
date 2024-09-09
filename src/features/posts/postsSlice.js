import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// postsApi addPosts deletePost updatePosts

export const postsApi = createApi({
    reducerPath : 'postsApi',
    baseQuery : fetchBaseQuery({
        baseUrl : 'http://localhost:3000/'
    }),
    tagTypes : ['Post'],
    endpoints : (builder) => ({
        postsApi : builder.query({
            query : () => 'posts',
            providesTags : (result) => 
                result 
            ? [...result.map(({id}) => ({type : 'Post',id})),{type : 'Post',id : 'LIST'}]
            : [{type : 'Post',id : 'LIST'}] 
        }),
        addPosts : builder.mutation({
            query : (post) => ({
                url : "posts",
                method : 'POST',
                body : post
            }),
            invalidatesTags : [{type : 'Post',id : 'LIST'}]
        }),
        deletePost : builder.mutation({
            query : (id) => ({
                url : `posts/${id}`,
                method : 'DELETE',
            }),
            invalidatesTags : (result,error,{id}) => [
                {type : 'Post',id},
                {type : 'Post', id : 'LIST'}
            ]
        }),
        updatePosts : builder.mutation({
            query : ({id,post}) => ({
                url : `posts/${id}`,
                method : 'PUT',
                body : post
            }),
            invalidatesTags : (result,error,{id}) => [
                {type : 'Post', id},
                {type : 'Post',id :  'LIST'}
            ]
        })
    })
})

export const {useAddPostsMutation,useDeletePostMutation,usePostsApiQuery,useUpdatePostsMutation} = postsApi;