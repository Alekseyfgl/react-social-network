import s from './Chat.module.css';
import {MessageAuthor} from './MessageAuthor/MessageAuthor';
import {MessageFriend} from './MessageFriend/MessageFriend';
import {SubmitBtn} from '../../../../kit/SubmitBtn/SubmitBtn';
import React, {ChangeEvent, FC, RefObject} from 'react';
import userMock from '../../../../assets/img/user-mock.png'


import {IMessagesInChatState} from '../../../../redux/dialogs-reducer';
import {InitialUserState} from '../../../../redux/user-info-reducer';

type ChatPropsType = {
    userInfo: InitialUserState
    friendInfo: InitialUserState
    messagesInChat: IMessagesInChatState[]
    newMessageBody: string
    sendMessage: () => void
    updateTextInMessage: (text: string) => void
};
export const Chat: FC<ChatPropsType> = (props) => {
    const {userInfo, friendInfo, messagesInChat, newMessageBody, sendMessage, updateTextInMessage} = props

    const textareaElem: RefObject<HTMLTextAreaElement> = React.createRef<HTMLTextAreaElement>();


    const messageComponents: JSX.Element[] = messagesInChat.map((m: IMessagesInChatState) => {

        return userInfo.id === m.userId ?
            (<MessageAuthor key={m.id} userId={m.id} text={m.text} date={m.date} authorImg={userInfo.photos.small ? userInfo.photos.small : userMock}/>) :
            (<MessageFriend key={m.id} userId={m.id} text={m.text} date={m.date} friendImg={userInfo.photos.small ? userInfo.photos.small : userMock}/>)
    })


    const onClickSendMessage = () => {
        sendMessage()
        // dispatch(sendMessageCreator())
    };

    const onChangeTextInMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text: string = e.currentTarget.value
        updateTextInMessage(text)
        // dispatch(updateNewMessageBodyCreator(e.currentTarget.value))
    };
    return (
        <div className={s.messages}>
            <div className={s.user}>
                <div className={'wr_img'}>
                    <img
                        src={friendInfo.photos.small ? friendInfo.photos.small : userMock}
                        alt="friend"
                    />
                </div>
                <div className={s.wr_user}>
                    <p className="name">{friendInfo.name}</p>
                    <div className={s.status}>
                        <span className={s.text}>{friendInfo.statusOnline ? 'Active now' : 'Inactive now'}</span>
                        <span className={s.indicator}></span>
                    </div>
                </div>
            </div>

            <div className={s.list}>
                {messageComponents}
            </div>

            <div className={s.form}>
                <textarea value={newMessageBody}
                          ref={textareaElem}
                          className={s.textarea}
                          placeholder={'Type something here...'}
                          onChange={onChangeTextInMessage}
                />
                <SubmitBtn onClick={onClickSendMessage}/>
            </div>
        </div>
    );
};
