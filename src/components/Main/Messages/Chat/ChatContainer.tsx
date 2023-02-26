import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../../../redux/dialogs-reducer';
import {connect} from 'react-redux';
import {ActionsTypes, IState} from '../../../../redux/state.interface';
import {Chat} from './Chat';


// export const ChatContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 const sendMessage = () => {
//                     store.dispatch(sendMessageCreator())
//                 };
//
//                 const updateTextInMessage = (text: string) => {
//                     store.dispatch(updateNewMessageBodyCreator(text))
//                 };
//
//                 return (<Chat sendMessage={sendMessage}
//                               updateTextInMessage={updateTextInMessage}
//                               messagesInChat={store.getState().messagesPage.messagesInChat}
//                               friendInfo={store.getState().friendInfo}
//                               userInfo={store.getState().userInfo}
//                               newMessageBody={store.getState().messagesPage.newMessageBody}
//                     />
//                 )
//             }}
//         </StoreContext.Consumer>
//     );
// }


const mapStateToProps = (state: IState) => {
    return {
        messagesPage: state.messagesPage,
        messagesInChat: state.messagesPage.messagesInChat,
        newMessageBody: state.messagesPage.newMessageBody,
        friendInfo: state.friendInfo,
        userInfo: state.userInfo
    }
}
const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        updateTextInMessage: (text: string) => {
            dispatch(updateNewMessageBodyCreator(text))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
    }
}

export const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);