import s from './Profile.module.css';
import { Post } from './Post/Post';
import { Aside } from '../Aside/Aside';

export type AuthorType = {
    name: string;
    img: string;
};
export type PostType = {
    id: number;
    date: string;
    img: string | null;
    text: string;
};
export type PostsType = {
    author: AuthorType;
    post: PostType[];
};

export const Profile = () => {
    const posts: PostsType = {
        author: {
            name: 'Alex Sims',
            img: 'https://m.media-amazon.com/images/M/MV5BOTBhMTI1NDQtYmU4Mi00MjYyLTk5MjEtZjllMDkxOWY3ZGRhXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg',
        },
        post: [
            {
                id: +new Date(),
                date: '7 January 11:40',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, quibusdam!',
                img: 'https://pen-online.com/fr/wp-content/uploads/2018/08/02092152/1-DSC_3189_02-1024x683.jpg',
            },
            {
                id: +new Date(),
                date: '21 January 11:40',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, quibusdam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima!',
                img: null,
            },
            {
                id: +new Date(),
                date: '14 January 11:40',
                text: 'Lorem ipsum dolor sit amet',
                img: 'https://www.bemytravelmuse.com/wp-content/uploads/2022/04/beautiful-places-in-africa-683x1024.jpg',
            },
        ],
    };

    const postsHTML: JSX.Element[] = posts.post.map((p: PostType) => <Post author={posts.author} id={p.id} date={p.date} text={p.text} img={p.img} />);

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
