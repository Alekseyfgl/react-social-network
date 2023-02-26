import s from './Messages.module.css';
import {MainSvgSelector} from '../../SvgSelector/MainSvgSelector';
import {Dialog} from './Dialog/Dialog';
import {IMsgState, IStore} from '../../../redux/state.interface';
import {FC} from 'react';
import {ChatContainer} from './Chat/ChatContainer';

interface IMessageProps {
    store: IStore
}

export const Messages: FC<IMessageProps> = (props) => {
    const store = props.store.getState().messagesPage;
    const dialogsElements: JSX.Element[] = store.dialogs.map((d: IMsgState) => <Dialog id={d.id} name={d.user} key={d.id}/>);

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

            <ChatContainer/>
        </div>
    );
};
