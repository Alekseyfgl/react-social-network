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
    users: []
}


export const usersReducer = (state: InitialUserList = initialState, action: ActionsTypes): InitialUserList => {

    switch (action.type) {
        case 'FOLLOW':
            console.log('FOLLOW')
            return {
                ...state, users: state.users.map((u: IUserList) => {
                    return u.id === action.userId ? {...u, followed: true} : u
                })
            }

        case 'UNFOLLOW':
            return {
                ...state, users: state.users.map((u: IUserList) => {
                    return u.id === action.userId ? {...u, followed: false} : u
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
