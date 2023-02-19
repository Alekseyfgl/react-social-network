import {FormEvent} from 'react';
import {addPostCreator, updateNewPostTextCreator} from './profile-reducer';
import {sendMessageCreator, updateNewMessageBodyCreator} from './dialogs-reducer';


export interface IStore {
    _state: IState
    getState: () => IState
    _callSubscriber: () => void
    onClickAddMessageHandler: (e: FormEvent<HTMLButtonElement>) => void
    updateMessage: (text: string) => void
    subscriber: (observer: () => void) => void
    dispatch: (action: any) => void
}

export interface IAuthorState {
    name: string;
    img: string;
}

export interface IPostState {
    id: number;
    date: string;
    text: string;
    img: string | null;
}

export interface IMsgState {
    id: number;
    user: string;
}

export interface IProfile {
    author: IAuthorState;
    newPostText: string;
    post: IPostState[];
}

export interface IProfilePageState {
    posts: IProfile
}

export interface IMassagePageState {
    newMessageBody: string
    dialogs: IMsgState[];
    messagesInChat: IMessagesInChatState[]
}

export interface IState {
    userInfo: IUserState
    profilePage: IProfilePageState
    messagesPage: IMassagePageState
    friendInfo: IUserState
}

export interface IUserState {
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


export interface IMessagesInChatState {
    id: number
    userId: number
    date: string
    text: string
}

export type ActionsTypes =
    ReturnType<typeof addPostCreator>
    | ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof updateNewPostTextCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>
