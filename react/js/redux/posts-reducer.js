import {PostsAPI} from "../api";

const SET_POST = 'SET_POST';

let initialState = {
    post: {
        "id": 1,
        "title": "1",
        "slug": "1",
        "content": "1",
        "category_id": 1,
        "user_id": 1,
        "status": 0,
        "views": 0,
        "is_featured": 1,
        "created_at": "1",
        "updated_at": "1",
        "date": "1",
        "image": "1",
        "description": "1"
    }


}

const postsReducer = (state = initialState, action) => {
    //console.log(action)
    switch (action.type) {
        case SET_POST: {
            console.log(123456)
            return {
                ...state,
                post: action.post
            }
        }
        default:
            return state;
    }
}

export const setPost = (post) => ({type: SET_POST, post});
export const getPost = (post) => async (dispatch) => {
    console.log(dispatch)
    let response = await PostsAPI.getPost(post);
    dispatch(setPost(response.data));
}
export const requestPost = (post) => {
    return async (dispatch) => {
        let data = await PostsAPI.getPost(post)
        dispatch(setPost(data))
    }
}
export default postsReducer;