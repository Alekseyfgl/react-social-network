import { Ad } from './Ad/Ad';
import { MainSvgSelector } from '../../SvgSelector/MainSvgSelector';
import s from './Navbar.module.css';

export const Navbar = () => {
    return (
        <div className={`${s.menu} block_light-blue`}>
            <ul className="nav">
                <li className={s.item}>
                    <div className={s.svg_wr}>
                        <MainSvgSelector id={'user'} />
                    </div>
                    <a href="src/components/Main/Navbar/Nav#Navbar.tsx" className={s.link}>
                        My page
                    </a>
                </li>
                <li className={s.item}>
                    <div className={s.svg_wr}>
                        <MainSvgSelector id={'news'} />
                    </div>
                    <a href="src/components/Main/Navbar/Nav#Navbar.tsx" className={s.link}>
                        News
                    </a>
                </li>
                <li className={s.item}>
                    <div className={s.svg_wr}>
                        <MainSvgSelector id={'messages'} />
                    </div>
                    <a href="src/components/Main/Navbar/Nav#Navbar.tsx" className={s.link}>
                        Messages
                    </a>
                </li>
                <li className={s.item}>
                    <div className={s.svg_wr}>
                        <MainSvgSelector id={'acquaintance'} />
                    </div>
                    <a href="src/components/Main/Navbar/Nav#Navbar.tsx" className={s.link}>
                        Acquaintance
                    </a>
                </li>
                <li className={s.item}>
                    <div className={s.svg_wr}>
                        <MainSvgSelector id={'settings'} />
                    </div>
                    <a href="src/components/Main/Navbar/Nav#Navbar.tsx" className={s.link}>
                        Settings
                    </a>
                </li>
                <li className={s.item}>
                    <div className={s.svg_wr}>
                        <MainSvgSelector id={'developers'} />
                    </div>
                    <a href="src/components/Main/Navbar/Nav#Navbar.tsx" className={s.link}>
                        Developers
                    </a>
                </li>
                <li className={s.item}>
                    <div className={s.svg_wr}>
                        <MainSvgSelector id={'technologies'} />
                    </div>
                    <a href="src/components/Main/Navbar/Nav#Navbar.tsx" className={s.link}>
                        Technologies
                    </a>
                </li>
            </ul>

            <Ad />
        </div>
    );
};
