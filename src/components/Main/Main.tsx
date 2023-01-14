import { Navbar } from './Navbar/Navbar';
import s from './Main.module.css';
import { Profile } from './Profile/Profile';

export const Main = () => {
    return (
        <main className={`${s.main} main_wr`}>
            <Navbar />
            <Profile />
            {/*<Messages />*/}
            <div>Избранное</div>
        </main>
    );
};
