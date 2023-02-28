import {ActionsTypes} from './redux-store';
import {InitialUserState} from './user-info-reducer';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';


export interface IUserList extends InitialUserState {
    followed: boolean
}

export interface InitialUserList {
    users: IUserList[]
}

const initialState: InitialUserList = {
    users: [
        {
            id: 2,
            userName: 'Dimach Lorem',
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
            followed: true
        },
        {
            id: 3,
            userName: 'Shash Qqqq',
            age: 40,
            country: 'Belarus',
            city: 'Vitebsk',
            phone: '+3755588843221',
            img: 'https://blog.hootsuite.com/wp-content/uploads/2021/07/free-stock-photos-03-scaled.jpeg',
            nickName: 'Alex_qqq',
            email: 'qweewfsdaf@gmail.cpm',
            birthday: '10 April 1997',
            publicationCount: 3,
            statusOnline: true,
            followed: true
        },
        {
            id: 4,
            userName: 'Andrey Andreq',
            age: 30,
            country: 'Belarus',
            city: 'Vitebsk',
            phone: '+3755588843221',
            img: 'https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863',
            nickName: 'Alex_qqq',
            email: 'qweewfsdaf@gmail.cpm',
            birthday: '10 April 1997',
            publicationCount: 3,
            statusOnline: true,
            followed: true
        },
        {
            id: 4,
            userName: 'Andrey Andreq',
            age: 30,
            country: 'Belarus',
            city: 'Vitebsk',
            phone: '+3755588843221',
            img: 'https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863',
            nickName: 'Alex_qqq',
            email: 'qweewfsdaf@gmail.cpm',
            birthday: '10 April 1997',
            publicationCount: 3,
            statusOnline: true,
            followed: false
        },
    ]
}


export const usersReducer = (state: InitialUserList = initialState, action: ActionsTypes): InitialUserList => {

    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state, users: state.users.map((u: IUserList) => {
                    return u.id === action.userId ? {...u, follow: true} : u
                })
            }

        case 'UNFOLLOW':
            return {
                ...state, users: state.users.map((u: IUserList) => {
                    return u.id === action.userId ? {...u, follow: false} : u
                })
            }
        case 'SET-USERS':
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}


export const followAC = (userId: number) => ({type: FOLLOW, userId} as const);
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const);
export const setUsersAC = (users: IUserList[]) => ({type: SET_USERS, users} as const);
