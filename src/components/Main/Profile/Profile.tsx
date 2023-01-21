import s from './Profile.module.css';
import { Post } from './Post/Post';
import { Aside } from '../Aside/Aside';

export const Profile = (props: any) => {
    const postsHTML: JSX.Element[] = props.posts.post.map((p: any) => <Post author={props.posts.author} id={p.id} date={p.date} text={p.text} img={p.img} />);

    return (
        <>
            <div className={s.content}>
                <div>User info</div>
                <div>Form for posts</div>
                {postsHTML}
            </div>
            <Aside />
        </>
    );
};
