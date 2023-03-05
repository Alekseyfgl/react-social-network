import React from 'react';
import axios from 'axios';
import {IUserList} from '../../../redux/users-reducer';
import userMock from '../../../assets/img/user-mock.png';
import s from './Users.module.css';


export class UsersC extends React.Component<any, any> {

    
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(r => {
                this.props.setUsersAC(r.data.items)
            })
    }

    usersElementsCreator() {

        return this.props.users.map((u: IUserList) => {

            const btnsFollowElements: JSX.Element = u.followed ?
                <button onClick={() => this.props.unfollowAC(u.id)}>unfollow</button> :
                <button onClick={() => this.props.follow(u.id)}>follow</button>
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
    }

    render() {
        const usersElements = this.usersElementsCreator();

        return (
            <div className={s.users}>
                {usersElements}
            </div>
        )
    }
}