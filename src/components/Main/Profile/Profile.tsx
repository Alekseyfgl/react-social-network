import s from './Profile.module.css';
import {Post} from './Post/Post';
import {Aside} from './Aside/Aside';
import {FormPost} from './FormPost/FormPost';
import {ActionsTypes, IPostState, IProfile} from '../../../redux/state.interface';
import {FC} from 'react';
import {UserInfo} from './UserInfo/UserInfo';

interface IProfileProps {

    posts: IProfile
    dispatch: (value: ActionsTypes) => void
}

export const Profile: FC<IProfileProps> = (props) => {
    const {posts, dispatch} = props;


    const postsComponents: JSX.Element[] = posts.post.map((p: IPostState) => {
        return (
            <Post author={posts.author}
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
                <FormPost newPostText={posts.newPostText}
                          dispatch={dispatch}
                    // updateTextPost={updateTextPost}
                />
                {postsComponents}
            </div>
            <Aside/>
        </>
    );
};
