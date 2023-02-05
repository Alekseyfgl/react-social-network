import s from './FormPost.module.css';
import {SubmitBtn} from '../../../../kit/SubmitBtn/SubmitBtn';
import React, {ChangeEvent, CSSProperties, FC, FormEvent, MouseEvent, RefObject} from 'react';

type FormPostType = {
    newPostText: string
    onClickAddPostHandler: (e: FormEvent<HTMLButtonElement>) => void;
    updateTextPost: (text: string) => void
}

export const FormPost: FC<FormPostType> = (props) => {
    const {newPostText, onClickAddPostHandler, updateTextPost} = props;

    // const [textAreaValue, setTextAreaValue] = useState<string>(newPostText);

    const styleBtn: { [key: string]: CSSProperties } = {
        container: {
            position: 'absolute',
            right: 24,
        },
    };

    const textArea: RefObject<HTMLTextAreaElement> = React.createRef<HTMLTextAreaElement>();

    const onClickHandlerAddPost = (e: MouseEvent<HTMLButtonElement>): void => onClickAddPostHandler(e);
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => updateTextPost(e.currentTarget.value)


    return (
        <form className={s.form}>
            <textarea ref={textArea}
                      placeholder={'Anything new?'}
                      className={s.textarea}
                      value={newPostText}
                      onChange={onChangeHandler}
            />

            <SubmitBtn onClick={onClickHandlerAddPost}
                       styleBtn={styleBtn}
            />
        </form>
    );
};
