import { Ad } from './Ad/Ad';
import { MainSvgSelector } from '../../SvgSelector/MainSvgSelector';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className={`${s.menu} block_light-blue`}>
            <ul>
                <li className={s.item}>
                    <NavLink to="/profile" className={s.link}>
                        <span className={s.svg_wr}>
                            <MainSvgSelector id={'user'} />
                        </span>
                        <span>My page</span>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/news" className={s.link}>
                        <span className={s.svg_wr}>
                            <MainSvgSelector id={'news'} />
                        </span>
                        <span>News</span>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/acquaintance" className={s.link}>
                        <span className={s.svg_wr}>
                            <MainSvgSelector id={'acquaintance'} />
                        </span>
                        <span>Acquaintance</span>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/messages" className={s.link}>
                        <span className={s.svg_wr}>
                            <MainSvgSelector id={'messages'} />
                        </span>
                        <span>Messages</span>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/settings" className={s.link}>
                        <span className={s.svg_wr}>
                            <MainSvgSelector id={'settings'} />
                        </span>
                        <span>Settings</span>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/developers" className={s.link}>
                        <span className={s.svg_wr}>
                            <MainSvgSelector id={'developers'} />
                        </span>
                        <span>Developers</span>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/technologies" className={s.link}>
                        <span className={s.svg_wr}>
                            <MainSvgSelector id={'technologies'} />
                        </span>
                        <span>Technologies</span>
                    </NavLink>
                </li>
            </ul>

            <Ad />
        </div>
    );
};
