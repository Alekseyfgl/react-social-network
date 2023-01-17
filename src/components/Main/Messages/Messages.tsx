import s from './Messages.module.css';
import { MainSvgSelector } from '../../SvgSelector/MainSvgSelector';
import { Dialog } from './Dialog/Dialog';

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

                <ul>
                    <Dialog />
                    <Dialog />
                    <Dialog />
                    <Dialog />
                    <Dialog />
                    <Dialog />
                </ul>
            </div>
            <div className={s.messages}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, reiciendis.</div>
        </div>
    );
};
