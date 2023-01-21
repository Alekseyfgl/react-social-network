import s from './Messages.module.css';
import { MainSvgSelector } from '../../SvgSelector/MainSvgSelector';
import { Dialog } from './Dialog/Dialog';
import { Chat } from './Chat/Chat';

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

            <Chat message={'qwe qweqwe'} />
        </div>
    );
};
