import {ActionsTypes, IUserState} from './state.interface';

// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const initialState: IUserState = {
    id: 1,
    userName: 'Alex Lorem',
    age: 99,
    country: 'Belarus',
    city: 'Minsk',
    phone: '+375558887755',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    nickName: 'Alex_qqq',
    email: 'qweewfsdaf@gmail.cpm',
    birthday: '10 April 1997',
    publicationCount: 3,
    statusOnline: true,
}

export const userInfoReducer = (state: IUserState = initialState, action: ActionsTypes) => {
    switch (action.type) {
        default :
            return state
    }
}

// export const addPostCreator = () => ({type: ADD_POST} as const);
// export const updateNewPostTextCreator = (text: string) => {
//     return {type: UPDATE_NEW_POST_TEXT, text: text} as const
// }