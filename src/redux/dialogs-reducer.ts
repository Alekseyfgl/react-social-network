import {ActionsTypes, IMassagePageState} from './state.interface';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


const initialState: IMassagePageState = {
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
}

export const dialogsReducer = (state: IMassagePageState = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.text
            return state
        case SEND_MESSAGE:
            state.messagesInChat.push({
                id: +new Date(),
                date: new Date().toDateString(),
                text: state.newMessageBody,
                userId: 1
            })
            state.newMessageBody = ''
            return state
        default:
            return state
    }
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE} as const);
export const updateNewMessageBodyCreator = (text: string) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, text: text} as const
}
