import s from './Ad.module.css';

export const Ad = () => {
    return (
        <div className={s.ad}>
            <a className={s.link} href="#">
                <img className={s.img} src="https://mirpozitiva.ru/wp-content/uploads/2019/11/1472042660_10.jpg" alt="network-shop" />
            </a>

            <figcaption className={s.description}>Take the test and get a 10% discount on tuition</figcaption>
        </div>
    );
};
