import {FormEvent} from 'react';
import {IStore} from './state.interface';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {ActionsTypes} from './redux-store';


export const store: IStore = {
    _state: {
        userInfo: {
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
        },
        profilePage: {
            author: {
                name: 'Alex Sims',
                img: 'https://m.media-amazon.com/images/M/MV5BOTBhMTI1NDQtYmU4Mi00MjYyLTk5MjEtZjllMDkxOWY3ZGRhXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg',
            },
            newPostText: '',
            posts: [
                {
                    id: +new Date(),
                    date: '7 January 11:40',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, quibusdam!',
                    img: 'https://pen-online.com/fr/wp-content/uploads/2018/08/02092152/1-DSC_3189_02-1024x683.jpg',
                },
                {
                    id: +new Date(),
                    date: '21 January 11:40',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, quibusdam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima!',
                    img: null,
                },
                {
                    id: +new Date(),
                    date: '14 January 11:40',
                    text: 'Lorem ipsum dolor sit amet',
                    img: 'https://www.bemytravelmuse.com/wp-content/uploads/2022/04/beautiful-places-in-africa-683x1024.jpg',
                },
            ],
        },
        messagesPage: {
            newMessageBody: 'Hello alex',
            dialogs: [
                {id: 1, user: 'Alex'},
                {id: 2, user: 'Dima'},
                {id: 3, user: 'Adam'},
            ],
            messagesInChat: [
                {
                    id: 20,
                    userId: 2,
                    date: '18.50',
                    text: 'Lorem ipsum dolor!!!',
                },
                {
                    id: 21,
                    userId: 2,
                    date: '18.50',
                    text: 'qwewerweqw',
                },
                {
                    id: 22,
                    userId: 2,
                    date: '18.50',
                    text: 'qwewerweqw',
                },
                {
                    id: 23,
                    userId: 1,
                    date: '18.50',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, quibusdam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima!',
                },
                {
                    id: 24,
                    userId: 1,
                    date: '18.50',
                    text: 'Good work',
                },
            ],
        },
        friendInfo: {
            id: 2,
            userName: 'Dimach Aluyanov',
            age: 25,
            country: 'Belarus',
            city: 'Grodno',
            phone: '+375557772233',
            img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            nickName: 'Dimach_dimach',
            email: 'Dimach_dimach@gmail.cpm',
            birthday: '10 April 1922',
            publicationCount: 77,
            statusOnline: true,
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('state changed')
    },
    onClickAddMessageHandler(e: FormEvent<HTMLButtonElement>) {
        e.preventDefault();
        console.log(e);
    },
    updateMessage(text: string) {
        this._state.messagesPage.newMessageBody = text
        this._callSubscriber();
    },
    subscriber(observer: () => void) {
        this._callSubscriber = observer
    },

    dispatch(action: ActionsTypes) { //action - это объект {type: 'ADD-POST'}
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._callSubscriber();
    }
}



