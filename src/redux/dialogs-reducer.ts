import {ActionsTypes, IMassagePageState} from './state.interface';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const dialogsReducer = (state: IMassagePageState, action: ActionsTypes) => {

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
