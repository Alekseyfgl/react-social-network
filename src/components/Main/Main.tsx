import { Navbar } from './Navbar/Navbar';
import s from './Main.module.css';
import { Profile } from './Profile/Profile';
import { Aside } from './Aside/Aside';

export const Main = () => {
    return (
        <main className={`${s.main} main_wr`}>
            <Navbar />
            <Profile />
            {/*<Message />*/}
            <Aside />
        </main>
    );
};
