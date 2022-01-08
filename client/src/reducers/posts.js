import { FETCH_ALL, CREATE } from "../constants/actionTypes";

export default (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload; // our actual posts
        case CREATE:
            return [...posts, action.payload];
        default:
            return posts;
    }
};