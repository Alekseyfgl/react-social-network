import s from './Profile.module.css';
import { Post } from './Post/Post';

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>User info</div>
            <div>Form for posts</div>
            <Post />
        </div>
    );
};
