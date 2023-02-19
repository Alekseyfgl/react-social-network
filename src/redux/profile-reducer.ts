import {ActionsTypes, IProfilePageState} from './state.interface';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const profileReducer = (state: IProfilePageState, action: ActionsTypes) => {


    switch (action.type) {
        case ADD_POST:
            state.posts.post.push({
                id: +new Date(),
                date: '21 January 11:40',
                text: state.posts.newPostText,
                img: null,
            });
            state.posts.newPostText = '';
            return state
        case UPDATE_NEW_POST_TEXT :
            state.posts.newPostText = action.text
            return state
        default :
            return state
    }
}

export const addPostCreator = () => ({type: ADD_POST} as const);
export const updateNewPostTextCreator = (text: string) => {
    return {type: UPDATE_NEW_POST_TEXT, text: text} as const
}