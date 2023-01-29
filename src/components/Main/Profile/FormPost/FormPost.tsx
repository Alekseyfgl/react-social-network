import s from './FormPost.module.css';
import { SubmitBtn } from '../../../../kit/SubmitBtn/SubmitBtn';
import React, { CSSProperties, FC, MouseEvent, RefObject } from 'react';

type FormPostType = {
    onClickAddPostHandler: (e: any, postValue: string) => void;
};

export const FormPost: FC<FormPostType> = (props) => {
    const styleBtn: { [key: string]: CSSProperties } = {
        container: {
            position: 'absolute',
            right: 24,
        },
    };

    const textArea: RefObject<HTMLTextAreaElement> = React.createRef<HTMLTextAreaElement>();

    // const onClickAddPostHandler = (e: FormEvent<HTMLButtonElement>) => {
    //     e.preventDefault();
    //     console.log(e);
    //     console.log(textArea.current.value);
    // };

    return (
        <form className={s.form}>
            <textarea ref={textArea} placeholder={'Anything new?'} className={s.textarea} />
            <SubmitBtn onClick={(e: MouseEvent<HTMLButtonElement>) => props.onClickAddPostHandler(e, textArea.current ? textArea.current.value : '---')} styleBtn={styleBtn} />
        </form>
    );
};
