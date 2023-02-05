import s from './MessageFriend.module.css';
import {FC} from 'react';

interface IMessageFriendProps {
    userId: number;
    date: string;
    text: string;
    friendImg: string;
}


export const MessageFriend: FC<IMessageFriendProps> = (props) => {
    const {userId, text, date, friendImg} = props
    return (
        <div className={s.item}>
            <div className={`${s.msg_author} ${s.msg_style}`}>
                <div className={`${s.wr_author} wr_img`}>
                    <img
                        src={friendImg}
                        alt="friend"/>
                </div>
                <div className={s.text}>
                    {text}
                </div>
            </div>
            <p className={s.date}>{date}</p>
        </div>
    );
};