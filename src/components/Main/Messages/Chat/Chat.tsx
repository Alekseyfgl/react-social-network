import s from './Chat.module.css';
import {MessageAuthor} from './MessageAuthor/MessageAuthor';
import {MessageFriend} from './MessageFriend/MessageFriend';
import {SubmitBtn} from '../../../../kit/SubmitBtn/SubmitBtn';
import React, {FC, FormEvent, RefObject} from 'react';
import {IFriendInfoState, IMessageState, IUserState} from '../../../../redux/state.interface';

type ChatPropsType = {
    userInfo: IUserState
    friendInfo: IFriendInfoState
    onClickAddMessageHandler: (e: FormEvent<HTMLButtonElement>) => void;
};
export const Chat: FC<ChatPropsType> = (props) => {
    const {userInfo, friendInfo, onClickAddMessageHandler} = props

    const textareaElem: RefObject<HTMLTextAreaElement> = React.createRef<HTMLTextAreaElement>();


    const messageComponents: JSX.Element[] = friendInfo.messageInChat.map((m: IMessageState) => {
        console.log('friendInfo', friendInfo.id)
        console.log('userInfo', userInfo.id)
        return userInfo.id === m.userId ?
            (<MessageAuthor key={m.id} userId={m.id} text={m.text} date={m.date} authorImg={userInfo.img}/>) :
            (<MessageFriend key={m.id} userId={m.id} text={m.text} date={m.date} friendImg={friendInfo.img}/>)
    })


    return (
        <div className={s.messages}>
            <div className={s.user}>
                <div className={'wr_img'}>
                    <img
                        src={friendInfo.img}
                        alt="friend"
                    />
                </div>
                <div className={s.wr_user}>
                    <p className="name">{friendInfo.userName}</p>
                    <div className={s.status}>
                        <span className={s.text}>{friendInfo.statusOnline ? 'Active now' : 'Inactive now'}</span>
                        <span className={s.indicator}></span>
                    </div>
                </div>
            </div>

            <div className={s.list}>
                {messageComponents}
            </div>

            <form className={s.form}>
                <textarea ref={textareaElem} className={s.textarea} placeholder={'Type something here...'}/>
                <SubmitBtn onClick={onClickAddMessageHandler}/>
            </form>
        </div>
    );
};
