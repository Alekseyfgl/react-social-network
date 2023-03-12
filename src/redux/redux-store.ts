import {combineReducers, createStore} from 'redux';
import {addPostAC, profileReducer, updateNewPostTextAC} from './profile-reducer';
import {dialogsReducer, sendMessageCreator, updateNewMessageBodyCreator} from './dialogs-reducer';
import {userInfoReducer} from './user-info-reducer';
import {friendInfoReducer} from './friend-info-reducer';
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC, usersReducer} from './users-reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        messagesPage: dialogsReducer,
        usersPage: usersReducer,
        userInfo: userInfoReducer,
        friendInfo: friendInfoReducer,
    }
)

export const store = createStore(rootReducer, composeWithDevTools());

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>

// @ts-ignore
window.store = store