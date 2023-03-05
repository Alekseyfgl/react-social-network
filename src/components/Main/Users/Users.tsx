import s from './Users.module.css'
import {UsersPropsType} from './UsersContainer';
import {FC} from 'react';
import {IUserList} from '../../../redux/users-reducer';
import axios from 'axios';
import userMock from '../../../assets/img/user-mock.png'

export const Users: FC<UsersPropsType> = (props) => {
    const {users, follow, unfollowAC, setUsersAC} = props


    if (users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(r => {
                setUsersAC(r.data.items)
            })

    }


    const usersElements: JSX.Element[] = users.map((u: IUserList) => {

        const btnsFollowElements: JSX.Element = u.followed ?
            <button onClick={() => unfollowAC(u.id)}>unfollow</button> :
            <button onClick={() => follow(u.id)}>follow</button>


        return (
            <div key={u.id}>
                <div>{u.name}</div>
                <div className={'wr_img'}>
                    <img className={''} src={u.photos.small ? u.photos.small : userMock} alt="user"/>
                </div>
                <div>{'location'}</div>
                <div>{'status'}</div>
                <div>{u.followed}</div>
                {btnsFollowElements}
            </div>
        )
    })

    return (
        <div className={s.users}>
            {usersElements}
        </div>
    );
}