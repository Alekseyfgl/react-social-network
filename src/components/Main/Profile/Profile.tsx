import s from './Profile.module.css';
import {Post} from './Post/Post';
import {Aside} from './Aside/Aside';
import {IPostState} from '../../../redux/state.interface';
import {FC} from 'react';
import {UserInfo} from './UserInfo/UserInfo';
import {FormPost} from './FormPost/FormPost';


export const Profile: FC<any> = (props) => {
    const {profilePage, updateNewPostText, addPost} = props;
    
    const postsComponents: JSX.Element[] = profilePage.posts.post.map((p: IPostState) => {
        return (
            <Post author={profilePage.posts.author}
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
                          newPostText={profilePage.posts.newPostText}
                />
                {postsComponents}
            </div>
            <Aside/>
        </>
    );
};
