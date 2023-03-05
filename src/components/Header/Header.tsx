import s from './Header.module.css';
import logo from '../../assets/img/logo.png';
import userPhoto from '../../assets/img/user-photo.png';
import {HeaderSvgSelector} from '../SvgSelector/HeaderSvgSelector';

export const Header = () => {
    return (
        <header className={`${s.header} block_light-blue`}>
            <div className={`${s.content} main_wr`}>
                <a className={s.logo}>
                    <img className={s.img} src={logo} alt="logo"/>
                </a>

                <div className={s.setting}>
                    <div className={s.wr_svg_msg}>
                        <HeaderSvgSelector id={'msg'}/>
                    </div>
                    <div className={s.wr_svg_notification}>
                        <HeaderSvgSelector id={'notification'}/>
                    </div>
                    <div className={s.user}>
                        <div className={'user-setting__wr-img'}>
                            <img src={userPhoto} alt="user"/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
