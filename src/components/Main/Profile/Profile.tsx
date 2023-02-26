import s from './Profile.module.css';
import {Post} from './Post/Post';
import {Aside} from './Aside/Aside';
import {IPostState, IStore} from '../../../redux/state.interface';
import {FC} from 'react';
import {UserInfo} from './UserInfo/UserInfo';
import {FormPostContainer} from './FormPost/FormPostContainer';

interface IProfileProps {
    store: IStore
}

export const Profile: FC<IProfileProps> = (props) => {
    const {store} = props;


    const postsComponents: JSX.Element[] = store.getState().profilePage.posts.post.map((p: IPostState) => {
        return (
            <Post author={store.getState().profilePage.posts.author}
                  id={p.id}
                  date={p.date}
                  text={p.text}
                  img={p.img}
            />)
    })


    return (
        <>
            <div className={s.content}>
                <UserInfo/>
                <FormPostContainer/>
                {postsComponents}
            </div>
            <Aside/>
        </>
    );
};
