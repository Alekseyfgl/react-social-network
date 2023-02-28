import {ActionsTypes} from './redux-store';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


export interface IMsgState {
    id: number;
    user: string;
}

export interface IMessagesInChatState {
    id: number
    userId: number
    date: string
    text: string
}


const initialState = {
    newMessageBody: 'Hello alex',
    dialogs: [
        {id: 1, user: 'Alex'},
        {id: 2, user: 'Dima'},
        {id: 3, user: 'Adam'},
    ] as IMsgState[],
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
    ] as IMessagesInChatState[],
}

export type MassagePageType = typeof initialState


export const dialogsReducer = (state: MassagePageType = initialState, action: ActionsTypes): MassagePageType => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state, newMessageBody: action.text}

        case SEND_MESSAGE:
            const newMessage: IMessagesInChatState = {
                id: +new Date(),
                date: new Date().toDateString(),
                text: state.newMessageBody,
                userId: 1
            }
            return {...state, newMessageBody: '', messagesInChat: [...state.messagesInChat, newMessage],}

        default:
            return state
    }
}


export const sendMessageCreator = () => ({type: SEND_MESSAGE} as const);

export const updateNewMessageBodyCreator = (text: string) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, text: text} as const
}
