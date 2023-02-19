import s from './FormPost.module.css';
import {SubmitBtn} from '../../../../kit/SubmitBtn/SubmitBtn';
import React, {ChangeEvent, CSSProperties, FC, RefObject} from 'react';
import {ActionsTypes} from '../../../../redux/state.interface';
import {addPostCreator, updateNewPostTextCreator} from '../../../../redux/profile-reducer';

type FormPostType = {
    newPostText: string
    dispatch: (action: ActionsTypes) => void;
}


export const FormPost: FC<FormPostType> = (props) => {
    const {newPostText, dispatch} = props;


    const styleBtn: { [key: string]: CSSProperties } = {
        container: {
            position: 'absolute',
            right: 24,
        },
    };

    const textArea: RefObject<HTMLTextAreaElement> = React.createRef<HTMLTextAreaElement>();

    const onClickHandlerAddPost = (): void => dispatch(addPostCreator());
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => dispatch(updateNewPostTextCreator(e.currentTarget.value))


    return (
        <div className={s.form}>
            <textarea ref={textArea}
                      placeholder={'Anything new?'}
                      className={s.textarea}
                      value={newPostText}
                      onChange={onChangeHandler}
            />

            <SubmitBtn onClick={onClickHandlerAddPost}
                       styleBtn={styleBtn}
            />
        </div>
    );
};
