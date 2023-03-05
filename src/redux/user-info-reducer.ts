import {ActionsTypes} from './redux-store';


export interface InitialUserState {
    id: number
    name: string
    age: number
    country: string
    city: string
    phone: string
    photos: {
        small: string | null
        large: string | null
    }
    nickName: string
    email: string
    birthday: string
    publicationCount: number,
    statusOnline: boolean,
}


const initialState: InitialUserState = {
    id: 1,
    name: 'Alex Lorem',
    age: 99,
    country: 'Belarus',
    city: 'Minsk',
    phone: '+375558887755',
    photos: {
        small: 'https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        large: null
    },
    nickName: 'Alex_qqq',
    email: 'qweewfsdaf@gmail.cpm',
    birthday: '10 April 1997',
    publicationCount: 3,
    statusOnline: true,
}

export const userInfoReducer = (state: InitialUserState = initialState, action: ActionsTypes) => {
    switch (action.type) {
        default :
            return state
    }
}

