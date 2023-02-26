import {ActionsTypes, IPostState, IProfilePageState} from './state.interface';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const initialState: IProfilePageState = {
    posts: {
        author: {
            name: 'Alex Sims',
            img: 'https://m.media-amazon.com/images/M/MV5BOTBhMTI1NDQtYmU4Mi00MjYyLTk5MjEtZjllMDkxOWY3ZGRhXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg',
        },
        newPostText: 'default text',
        post: [
            {
                id: +new Date(),
                date: '7 January 11:40',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, quibusdam!',
                img: 'https://pen-online.com/fr/wp-content/uploads/2018/08/02092152/1-DSC_3189_02-1024x683.jpg',
            },
            {
                id: +new Date(),
                date: '21 January 11:40',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, quibusdam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima!',
                img: null,
            },
            {
                id: +new Date(),
                date: '14 January 11:40',
                text: 'Lorem ipsum dolor sit amet',
                img: 'https://www.bemytravelmuse.com/wp-content/uploads/2022/04/beautiful-places-in-africa-683x1024.jpg',
            },
        ],
    },
}

export const profileReducer = (state: IProfilePageState = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case ADD_POST: {
            const stateCopy: IProfilePageState = {...state}
            const copyPosts: IPostState[] = [...stateCopy.posts.post]

            copyPosts.push({
                id: +new Date(),
                date: '21 January 11:40',
                text: state.posts.newPostText,
                img: null,
            });

            stateCopy.posts.post = copyPosts
            stateCopy.posts.newPostText = '';
            return stateCopy
        }

        case UPDATE_NEW_POST_TEXT : {
            const stateCopy = {...state}
            stateCopy.posts.newPostText = action.text
            return stateCopy
        }

        default :
            return state
    }
}

export const addPostAC = () => ({type: ADD_POST} as const);

export const updateNewPostTextAC = (text: string) => {
    return {type: UPDATE_NEW_POST_TEXT, text: text} as const
}