import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {userInfoReducer} from './user-info-reducer';
import {friendInfoReducer} from './friend-info-reducer';

const reducers = combineReducers(
    {
        profilePage: profileReducer,
        messagesPage: dialogsReducer,
        userInfo: userInfoReducer,
        friendInfo: friendInfoReducer
    }
)

export const store = createStore(reducers);

// @ts-ignore
window.store = store