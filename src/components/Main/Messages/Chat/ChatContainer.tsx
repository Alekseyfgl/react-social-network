import React, {FC} from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../../../redux/dialogs-reducer';
import {Chat} from './Chat';
import {StoreContext} from '../../../../store-context/StoreContext';

interface IChatContainerProps {

}

export const ChatContainer: FC<IChatContainerProps> = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                const sendMessage = () => {
                    store.dispatch(sendMessageCreator())
                };

                const updateTextInMessage = (text: string) => {
                    store.dispatch(updateNewMessageBodyCreator(text))
                };

                return (<Chat sendMessage={sendMessage}
                              updateTextInMessage={updateTextInMessage}
                              messagesInChat={store.getState().messagesPage.messagesInChat}
                              friendInfo={store.getState().friendInfo}
                              userInfo={store.getState().userInfo}
                              newMessageBody={store.getState().messagesPage.newMessageBody}
                    />
                )
            }}
        </StoreContext.Consumer>
    );
}