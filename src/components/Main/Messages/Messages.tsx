import s from './Messages.module.css';
import { MainSvgSelector } from '../../SvgSelector/MainSvgSelector';
import { Dialog } from './Dialog/Dialog';
import { Chat } from './Chat/Chat';

const mesgs = {
    author: 'Alex',
    friend: 'Dima',
    dialogId: 1,
    messages: [
        {
            authorId: 1,
            date: '12 june 18.50',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, quibusdam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima!',
        },
        {
            friendId: 2,
            date: '13 june 18.50',
            text: 'Lorem ipsum dolor!!!',
        },
    ],
};

export const Messages = (props: any) => {
    const dialogsElements: JSX.Element[] = props.dialogs.map((d: any) => <Dialog id={d.id} name={d.user} key={d.id} />);

    return (
        <div className={`${s.block} block_light-blue`}>
            <div className={s.dialogs}>
                <h2 className={s.title}>Dialogs</h2>
                <form className={s.form}>
                    <div className={s.wr_svg}>
                        <MainSvgSelector id={'loupe'} />
                    </div>
                    <input className={s.input} type="text" placeholder={'Search'} />
                </form>

                <div>{dialogsElements}</div>
            </div>

            <Chat onClickAddMessageHandler={props.onClickAddMessageHandler} />
        </div>
    );
};
