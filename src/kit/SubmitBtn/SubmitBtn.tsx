import s from './SubmitBtn.module.css';
import { MainSvgSelector } from '../../components/SvgSelector/MainSvgSelector';
import { CSSProperties, FC, MouseEvent } from 'react';

type SubmitBtnPropsType = {
    styleBtn?: { [key: string]: CSSProperties };
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};
export const SubmitBtn: FC<SubmitBtnPropsType> = (props) => {
    const { styleBtn, onClick } = props;
    const propsStyles: CSSProperties = styleBtn ? styleBtn.container : {};

    return (
        <button onClick={onClick} className={s.btn} style={propsStyles}>
            <span className={s.wr_svg}>
                <MainSvgSelector id={'submit'} />
            </span>
        </button>
    );
};
