import s from './Post.module.css';
import { MainSvgSelector } from '../../../SvgSelector/MainSvgSelector';
import { AuthorType, PostType } from '../Profile';

type PostPropsType = PostType & {
    author: AuthorType;
};
export const Post = (props: PostPropsType) => {
    return (
        <article className={`${s.post} block_light-blue pd`}>
            <div className={s.setting}>...</div>

            <div className={`${s.author} ${s.pd}`}>
                <div className={s.wr}>
                    <img className={`${s.author_img} img_setting`} src={props.author.img} alt="author" />
                </div>
                <div className="autor_info">
                    <p className="author_name">{props.author.name}</p>
                    <p className={s.date}>{props.date}</p>
                </div>
            </div>

            <p className={`${s.text} ${s.pd}`}>{props.text}</p>
            {props.img && <img className={`${s.img} `} src={props.img} alt="post" />}
            <div className={s.actions}>
                <button className={s.btn_like}>
                    <MainSvgSelector id={'like'} />
                </button>
                <button className={s.btn_comment}>
                    <MainSvgSelector id={'comment'} />
                </button>
            </div>
        </article>
    );
};
