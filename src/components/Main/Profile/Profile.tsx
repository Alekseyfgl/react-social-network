import s from './Profile.module.css';
import {Post} from './Post/Post';
import {Aside} from './Aside/Aside';
import {FC} from 'react';
import {UserInfo} from './UserInfo/UserInfo';
import {FormPost} from './FormPost/FormPost';
import {IPostState} from '../../../redux/profile-reducer';
import {ProfilePropsType} from './ProfileContainer';


export const Profile: FC<ProfilePropsType> = (props) => {
    const {profilePage, updateNewPostText, addPost} = props;

    const postsComponents: JSX.Element[] = profilePage.posts.map((p: IPostState) => {
        return (
            <Post key={p.id}
                  author={profilePage.author}
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
                <FormPost updateNewPostText={updateNewPostText}
                          addPost={addPost}
                          newPostText={profilePage.newPostText}
                />
                {postsComponents}
            </div>
            <Aside/>
        </>
    );
};
