import {FormEvent} from 'react';
import {ActionsTypes} from './redux-store';


export interface IStore {
    _state: IState
    getState: () => IState
    _callSubscriber: () => void
    onClickAddMessageHandler: (e: FormEvent<HTMLButtonElement>) => void
    updateMessage: (text: string) => void
    subscriber: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

interface IAuthorState {
    name: string;
    img: string;
}

interface IPostState {
    id: number;
    date: string;
    text: string;
    img: string | null;
}

interface IMsgState {
    id: number;
    user: string;
}

interface IProfile {
    author: IAuthorState;
    newPostText: string;
    posts: IPostState[];
}


interface IMassagePageState {
    newMessageBody: string
    dialogs: IMsgState[];
    messagesInChat: IMessagesInChatState[]
}

export interface IState {
    userInfo: IUserState
    profilePage: IProfile
    messagesPage: IMassagePageState
    friendInfo: IUserState
}

interface IUserState {
    id: number
    userName: string
    age: number
    country: string
    city: string
    phone: string
    img: string
    nickName: string
    email: string
    birthday: string
    publicationCount: number,
    statusOnline: boolean,
}


interface IMessagesInChatState {
    id: number
    userId: number
    date: string
    text: string
}


