import s from './Chat.module.css';
import { MessageAuthor } from './MessageAuthor/MessageAuthor';
import { MessageFriend } from './MessageFriend/MessageFriend';
import { SubmitBtn } from '../../../../kit/SubmitBtn/SubmitBtn';
import React, { FC } from 'react';

type ChatPropsType = {
    onClickAddMessageHandler: () => void;
};
export const Chat: FC<ChatPropsType> = (props) => {
    const textareaElem: any = React.createRef();

    // const onClickAddMessageHandler = (e: FormEvent<HTMLButtonElement>) => {
    //     e.preventDefault();
    //     console.log(e);
    //     console.log(textareaElem.current.value);
    // };
    return (
        <div className={s.messages}>
            <div className={s.user}>
                <div className={'wr_img'}>
                    <img
                        src="https://people.com/thmb/X91z4SzfJ8RL74dlTVfAjsCIedk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(719x0:721x2)/dan-bilzerian-2000-6d206110a59f456e905579ebbce41864.jpg"
                        alt="user"
                    />
                </div>
                <div className={s.wr_user}>
                    <p className="name">Alex Buckmaster</p>
                    <div className={s.status}>
                        <span className={s.text}>Active now</span>
                        <span className={s.indicator}></span>
                    </div>
                </div>
            </div>

            <div className={s.list}>
                <MessageAuthor />
                <MessageFriend />
                <MessageFriend />
                <MessageFriend />
                <MessageFriend />
                <MessageFriend />
                <MessageFriend />
                <MessageFriend />
                <MessageFriend />
                <MessageFriend />
            </div>

            <form className={s.form}>
                <textarea ref={textareaElem} className={s.textarea} placeholder={'Type something here...'} />
                <SubmitBtn onClick={props.onClickAddMessageHandler} />
            </form>
        </div>
    );
};
