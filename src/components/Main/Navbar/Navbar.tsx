import { Ad } from './Ad/Ad';
import { MainSvgSelector } from '../../SvgSelector/MainSvgSelector';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className={`${s.navbar} block_margin_right block_light-blue`}>
            <nav>
                <NavLink activeClassName={s.active} to="/profile" className={s.link}>
                    <span className={s.svg_wr}>
                        <MainSvgSelector id={'user'} />
                    </span>
                    <span>My page</span>
                </NavLink>

                <NavLink to="/news" activeClassName={s.active} className={s.link}>
                    <span className={s.svg_wr}>
                        <MainSvgSelector id={'news'} />
                    </span>
                    <span>News</span>
                </NavLink>

                <NavLink to="/acquaintance" activeClassName={s.active} className={s.link}>
                    <span className={s.svg_wr}>
                        <MainSvgSelector id={'acquaintance'} />
                    </span>
                    <span>Acquaintance</span>
                </NavLink>

                <NavLink to="/messages" activeClassName={s.active} className={s.link}>
                    <span className={s.svg_wr}>
                        <MainSvgSelector id={'messages'} />
                    </span>
                    <span>Messages</span>
                </NavLink>

                <NavLink to="/settings" activeClassName={s.active} className={s.link}>
                    <span className={s.svg_wr}>
                        <MainSvgSelector id={'settings'} />
                    </span>
                    <span>Settings</span>
                </NavLink>

                <NavLink to="/developers" activeClassName={s.active} className={s.link}>
                    <span className={s.svg_wr}>
                        <MainSvgSelector id={'developers'} />
                    </span>
                    <span>Developers</span>
                </NavLink>

                <NavLink to="/technologies" activeClassName={s.active} className={s.link}>
                    <span className={s.svg_wr}>
                        <MainSvgSelector id={'technologies'} />
                    </span>
                    <span>Technologies</span>
                </NavLink>
            </nav>

            <Ad />
        </div>
    );
};
