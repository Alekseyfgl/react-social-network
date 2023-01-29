import s from './Aside.module.css';
import { MainSvgSelector } from '../../../SvgSelector/MainSvgSelector';
import { Person } from './Person/Person';

export const Aside = () => {
    return (
        <aside className={s.aside}>
            <div className={`${s.favourite} block_light-blue`}>
                <div className={s.title}>
                    <p className="text">Favourite</p>
                    <div className={s.svg_star}>
                        <MainSvgSelector id={'star'} />
                    </div>
                </div>

                <Person />
                <Person />
                <Person />
                <Person />
                <Person />
            </div>

            <div className="projects">Projects</div>
        </aside>
    );
};
