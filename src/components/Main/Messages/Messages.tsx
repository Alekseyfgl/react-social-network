import s from './Messages.module.css';
import { MainSvgSelector } from '../../SvgSelector/MainSvgSelector';
import { Dialog } from './Dialog/Dialog';
import { Message } from './Chat/Message';

export const Messages = () => {
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

                <div>
                    <Dialog id={1} name={'Alex'} />
                    <Dialog id={2} name={'Shasha'} />
                    <Dialog id={3} name={'Dima'} />
                </div>
            </div>

            <Message message={'He alex'} />
            {/*<Message message={'He Dimach'} />*/}
            {/*<Message message={'He Shasha'} />*/}
        </div>
    );
};
