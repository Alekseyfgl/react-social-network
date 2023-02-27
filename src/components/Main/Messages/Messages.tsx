import s from './Messages.module.css';
import {MainSvgSelector} from '../../SvgSelector/MainSvgSelector';
import {Dialog} from './Dialog/Dialog';
import {FC} from 'react';
import {Chat} from './Chat/Chat';
import {IMsgState} from '../../../redux/dialogs-reducer';
import {MessagePropsType} from './MessagesCointainer';


export const Messages: FC<MessagePropsType> = (props) => {
    const {messagesPage, userInfo, friendInfo, sendMessage, updateTextInMessage} = props
    const dialogsElements: JSX.Element[] = messagesPage.dialogs.map((d: IMsgState) => <Dialog id={d.id} name={d.user} key={d.id}/>);

    return (
        <div className={`${s.block} block_light-blue`}>
            <div className={s.dialogs}>
                <h2 className={s.title}>Dialogs</h2>
                <div className={s.form}>
                    <div className={s.wr_svg}>
                        <MainSvgSelector id={'loupe'}/>
                    </div>
                    <input className={s.input} type="text" placeholder={'Search'}/>
                </div>

                <div>{dialogsElements}</div>
            </div>

            <Chat messagesInChat={messagesPage.messagesInChat}
                  newMessageBody={messagesPage.newMessageBody}
                  userInfo={userInfo}
                  friendInfo={friendInfo}
                  sendMessage={sendMessage}
                  updateTextInMessage={updateTextInMessage}
            />
        </div>
    );
};
