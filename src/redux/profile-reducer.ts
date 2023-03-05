import {ActionsTypes} from './redux-store';


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


export type InitialProfileType = {
    author: IAuthorState;
    newPostText: string;
    posts: IPostState[];
}

export interface IAuthorState {
    name: string;
    img: string;
}

export interface IPostState {
    id: number;
    date: string;
    text: string;
    img: string | null;
}

const initialState: InitialProfileType = {
    author: {
        name: 'Alex Sims',
        img: 'https://m.media-amazon.com/images/M/MV5BOTBhMTI1NDQtYmU4Mi00MjYyLTk5MjEtZjllMDkxOWY3ZGRhXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg',
    },
    newPostText: 'default text',
    posts: [
        {
            id: 10,
            date: '7 January 11:40',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, quibusdam!',
            img: 'https://pen-online.com/fr/wp-content/uploads/2018/08/02092152/1-DSC_3189_02-1024x683.jpg',
        },
        {
            id: 11,
            date: '21 January 11:40',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, quibusdam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima!',
            img: null,
        },
        {
            id: 12,
            date: '14 January 11:40',
            text: 'Lorem ipsum dolor sit amet',
            img: 'https://www.bemytravelmuse.com/wp-content/uploads/2022/04/beautiful-places-in-africa-683x1024.jpg',
        },
    ],
}


export const profileReducer = (state: InitialProfileType = initialState, action: ActionsTypes): InitialProfileType => {

    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: +new Date(),
                date: '21 January 11:40',
                text: state.newPostText,
                img: null,
            };

            return {...state, posts: [newPost, ...state.posts], newPostText: ''} as InitialProfileType
        }

        case UPDATE_NEW_POST_TEXT : {
            return {
                ...state, newPostText: action.text
            } as InitialProfileType
        }

        default :
            return state
    }
}

export const addPostAC = () => ({type: ADD_POST} as const);

export const updateNewPostTextAC = (text: string) => {
    return {type: UPDATE_NEW_POST_TEXT, text: text} as const
}
