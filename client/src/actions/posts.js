import * as api from '../api';

// Action Creators
// functions that return actions
// redux-thunk allows us to deal with async logic
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post); // post api request to backend server
        
        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error);
    }
};