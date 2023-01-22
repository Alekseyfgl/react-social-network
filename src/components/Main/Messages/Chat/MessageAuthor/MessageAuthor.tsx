import s from './MessageAuthor.module.css';

export const MessageAuthor = () => {
    return (
        <div className={s.item}>
            <div className={`${s.msg_author} ${s.msg_style}`}>
                <div className={`${s.wr_author} wr_img`}>
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                </div>
                <div className={s.text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, dolores fugiat quis quo quos totam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, dolores fugiat quis quo quos totam.
                </div>
            </div>
            <p className={s.date}>3h ago</p>
        </div>
    );
};
