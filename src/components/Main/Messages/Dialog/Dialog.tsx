import s from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

type DialogPropsType = {
    id: number;
    name: string;
};
export const Dialog = (props: DialogPropsType) => {
    const path: string = `/messages/${props.id}`;
    return (
        <NavLink to={path} className={s.dialog}>
            <div className={'wr_img'}>
                <span className={s.status}></span>
                <img
                    src="https://people.com/thmb/X91z4SzfJ8RL74dlTVfAjsCIedk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(719x0:721x2)/dan-bilzerian-2000-6d206110a59f456e905579ebbce41864.jpg"
                    alt="user"
                />
            </div>
            <div className={s.container}>
                <p className={s.name}>{props.name}</p>
                <p className={s.message}>Hello! How are you?</p>
                <span className={s.time}>02:00 am</span>
                <span className={s.notifications}>1</span>
            </div>
        </NavLink>
    );
};
