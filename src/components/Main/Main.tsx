import { Nav } from './Nav/Nav';
import { Content } from '../Content';
import s from './Main.module.css';

export const Main = () => {
    return (
        <main className={`${s.main} main_wr`}>
            <Nav />
            <Content />
            <div>Избранное</div>
        </main>
    );
};
