import {ActionsTypes, IUserState} from './state.interface';

// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const initialState: IUserState = {
    id: 2,
    userName: 'Dimach Aluyanov',
    age: 25,
    country: 'Belarus',
    city: 'Grodno',
    phone: '+375557772233',
    img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    nickName: 'Dimach_dimach',
    email: 'Dimach_dimach@gmail.cpm',
    birthday: '10 April 1922',
    publicationCount: 77,
    statusOnline: true,
}

export const friendInfoReducer = (state: IUserState = initialState, action: ActionsTypes) => {
    switch (action.type) {
        default :
            return state
    }
}

// export const addPostCreator = () => ({type: ADD_POST} as const);
// export const updateNewPostTextCreator = (text: string) => {
//     return {type: UPDATE_NEW_POST_TEXT, text: text} as const
// }