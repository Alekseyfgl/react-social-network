import s from './Post.module.css';
import { PostSvgSelector } from '../../../SvgSelector/PostSvgSelector';

export const Post = () => {
    return (
        <article className={`${s.post} block_light-blue pd`}>
            <div className={s.setting}>
                ...
                <div className="menu">
                    <button>delete</button>
                    <button>change</button>
                    <button>copy link</button>
                </div>
            </div>

            <div className={`${s.author} ${s.pd}`}>
                <div className={s.wr}>
                    <img className={'img_setting'} src="https://merk.anwb.nl/m/c40483f373c68f06/Header_3000-kenia_rift-valley_algemeen_rondreis-afrika_olifant_gras_shutterstock.jpg" alt="author" />
                </div>
                <div className="autor_info">
                    <p className="author_name">Katie Sims</p>
                    <p className={s.date}>12 January 11:40</p>
                </div>
            </div>

            <p className={`${s.text} ${s.pd}`}>My work day news from a phone call. One of my clients ...</p>
            <img className={`${s.img} img_setting`} src="https://cdn.erlebe.de/wp-content/uploads/2020/08/EFR_Beitrag_Afrika.jpg" alt="post" />
            <div className={s.actions}>
                <button className={s.btn_like}>
                    <PostSvgSelector id={'like'} />
                </button>
                <button className={s.btn_comment}>
                    <PostSvgSelector id={'comment'} />
                </button>
            </div>
        </article>
    );
};
