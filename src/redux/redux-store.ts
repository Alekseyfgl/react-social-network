import {combineReducers, createStore} from 'redux';
import {addPostAC, profileReducer, updateNewPostTextAC} from './profile-reducer';
import {dialogsReducer, sendMessageCreator, updateNewMessageBodyCreator} from './dialogs-reducer';
import {userInfoReducer} from './user-info-reducer';
import {friendInfoReducer} from './friend-info-reducer';
import {followAC, setUsersAC, unfollowAC, usersReducer} from './users-reducer';

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

export const store = createStore(rootReducer);

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>

// @ts-ignore
window.store = store