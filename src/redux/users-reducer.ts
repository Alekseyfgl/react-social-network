import {ActionsTypes} from './redux-store';
import {InitialUserState} from './user-info-reducer';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';


export interface IUserList extends InitialUserState {
    followed: boolean
}

export interface InitialUserList {
    users: IUserList[],
    pageSize: number,
    totalUsersCount: number
    currentPage: number
}

const initialState: InitialUserList = {
    users: [],
    currentPage: 1,
    pageSize: 5,
    totalUsersCount: 0,
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
            return {...state, users: [...action.users]}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage};
        case 'SET-TOTAL-USERS-COUNT' :
            return {...state, totalUsersCount: action.totalUsersCount};
        default:
            return state
    }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const);
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const);
export const setUsersAC = (users: IUserList[]) => ({type: SET_USERS, users} as const);
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const);
export const setTotalUsersCountAC = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount} as const);
