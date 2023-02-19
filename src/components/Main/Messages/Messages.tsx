import s from './Messages.module.css';
import {MainSvgSelector} from '../../SvgSelector/MainSvgSelector';
import {Dialog} from './Dialog/Dialog';
import {Chat} from './Chat/Chat';
import {ActionsTypes, IMassagePageState, IMsgState, IUserState} from '../../../redux/state.interface';
import {FC} from 'react';

interface IMessageProps {
    friendInfo: IUserState
    userInfo: IUserState
    messagesPage: IMassagePageState
    dispatch: (value: ActionsTypes) => void
}

export const Messages: FC<IMessageProps> = (props) => {
    const {userInfo, friendInfo, messagesPage, dispatch} = props;
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

            <Chat friendInfo={friendInfo}
                  userInfo={userInfo}
                  messagesInChat={messagesPage.messagesInChat}
                  dispatch={dispatch}
                  newMessageBody={messagesPage.newMessageBody}
            />
        </div>
    );
};
