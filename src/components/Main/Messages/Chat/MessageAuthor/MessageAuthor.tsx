import s from './MessageAuthor.module.css';
import {FC} from 'react';

interface IMessageAuthorProps {
    userId: number;
    date: string;
    text: string;
    authorImg: string
}

export const MessageAuthor: FC<IMessageAuthorProps> = (props) => {
    const {userId, text, date, authorImg} = props
    return (
        <div className={s.item}>
            <div className={`${s.msg_author} ${s.msg_style}`}>
                <div className={`${s.wr_author} wr_img`}>
                    <img
                        src={authorImg}
                        alt="author"/>
                </div>
                <div className={s.text}>
                    {text}
                </div>
            </div>
            <p className={s.date}>{date}</p>
        </div>
    );
};
