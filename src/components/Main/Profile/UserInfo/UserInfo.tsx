import s from './UserInfo.module.css'
import {MainSvgSelector} from '../../../SvgSelector/MainSvgSelector';

export const UserInfo = () => {
    return (
        <div className={`${s.user} block_light-blue`}>
            <div className={s.user_info}>
                <div className={s.img_wr}>
                    <img
                        src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80"
                        alt="user"/>
                </div>
                <div>

                    <div className={s.names}>
                        <div className={s.user_name}>Katie Sims</div>
                        <div className={s.user_nick}>Katie_Sims</div>
                    </div>


                    <div className={s.location}>
                        <div className={s.item}>
                            <div className={s.svg_wr}>
                                <MainSvgSelector id={'location'}/>
                            </div>
                            <p>Minsk</p>
                        </div>
                        <div className={s.item}>
                            <div className={s.svg_wr}>
                                <MainSvgSelector id={'publication'}/>
                            </div>
                            <p>{`${78} publications`}</p>
                        </div>
                    </div>
                </div>
            </div>


            <p className={s.title}>Contact Information</p>

            <div className={s.contact_items}>
                <div className={s.contact_item}>
                    <div className={s.svg_wr}>
                        <MainSvgSelector id={'phone'}/>
                    </div>
                    <div>
                        <p>Phone</p><p className={s.contacts}>(708) 813-8989</p>
                    </div>
                </div>
                <div className={s.contact_item}>
                    <div className={s.svg_wr}>
                        <MainSvgSelector id={'mail'}/>
                    </div>
                    <div>
                        <p>Email</p><p className={s.contacts}>KatieS@gmail.com</p>
                    </div>
                </div>
                <div className={s.contact_item}>
                    <div className={s.svg_wr}>
                        <MainSvgSelector id={'birthday'}/>
                    </div>
                    <div>
                        <p>Birthday</p><p className={s.contacts}>April, 10</p>
                    </div>
                </div>
            </div>
        </div>
    );
}