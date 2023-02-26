import s from './FormPost.module.css';
import {SubmitBtn} from '../../../../kit/SubmitBtn/SubmitBtn';
import React, {CSSProperties, FC, RefObject} from 'react';

type FormPostType = {
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
}


export const FormPost: FC<FormPostType> = (props) => {
    const {newPostText, updateNewPostText, addPost} = props;

    const styleBtn: { [key: string]: CSSProperties } = {
        container: {
            position: 'absolute',
            right: 24,
        },
    };

    const textArea: RefObject<HTMLTextAreaElement> = React.createRef<HTMLTextAreaElement>();

    const onAddPost = (): void => {
        addPost()
    };


    const onChangeHandler = () => {
        const text: string = textArea.current!.value;
        updateNewPostText(text)
    }


    return (
        <div className={s.form}>
            <textarea ref={textArea}
                      placeholder={'Anything new?'}
                      className={s.textarea}
                      value={newPostText}
                      onChange={onChangeHandler}
            />

            <SubmitBtn onClick={onAddPost}
                       styleBtn={styleBtn}
            />
        </div>
    );
};
