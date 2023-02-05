import s from './Messages.module.css';
import {MainSvgSelector} from '../../SvgSelector/MainSvgSelector';
import {Dialog} from './Dialog/Dialog';
import {Chat} from './Chat/Chat';
import {IFriendInfoState, IMsgState, IUserState} from '../../../redux/state.interface';
import {FC, FormEvent} from 'react';

interface IMessageProps {
    friendInfo: IFriendInfoState
    userInfo: IUserState
    dialogs: IMsgState[]
    onClickAddMessageHandler: (e: FormEvent<HTMLButtonElement>) => void;
}

export const Messages: FC<IMessageProps> = (props) => {
    const {userInfo, friendInfo, dialogs, onClickAddMessageHandler} = props;
    const dialogsElements: JSX.Element[] = dialogs.map((d: IMsgState) => <Dialog id={d.id} name={d.user} key={d.id}/>);

    return (
        <div className={`${s.block} block_light-blue`}>
            <div className={s.dialogs}>
                <h2 className={s.title}>Dialogs</h2>
                <form className={s.form}>
                    <div className={s.wr_svg}>
                        <MainSvgSelector id={'loupe'}/>
                    </div>
                    <input className={s.input} type="text" placeholder={'Search'}/>
                </form>

                <div>{dialogsElements}</div>
            </div>

            <Chat friendInfo={friendInfo} userInfo={userInfo} onClickAddMessageHandler={onClickAddMessageHandler}/>
        </div>
    );
};
