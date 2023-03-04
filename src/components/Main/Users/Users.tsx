import s from './Users.module.css'
import {UsersPropsType} from './UsersContainer';
import {FC} from 'react';
import {IUserList} from '../../../redux/users-reducer';

export const Users: FC<UsersPropsType> = (props) => {
    const {users, follow, unfollowAC, setUsersAC} = props


    if (users.length === 0) {
        setUsersAC([
            {
                id: 2,
                userName: 'Dimach Lorem',
                age: 99,
                country: 'Belarus',
                city: 'Minsk',
                phone: '+375558887755',
                img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                nickName: 'Alex_qqq',
                email: 'qweewfsdaf@gmail.cpm',
                birthday: '10 April 1997',
                publicationCount: 3,
                statusOnline: true,
                followed: true
            },
            {
                id: 3,
                userName: 'Shash Qqqq',
                age: 40,
                country: 'Belarus',
                city: 'Vitebsk',
                phone: '+3755588843221',
                img: 'https://blog.hootsuite.com/wp-content/uploads/2021/07/free-stock-photos-03-scaled.jpeg',
                nickName: 'Alex_qqq',
                email: 'qweewfsdaf@gmail.cpm',
                birthday: '10 April 1997',
                publicationCount: 3,
                statusOnline: true,
                followed: true
            },
            {
                id: 4,
                userName: 'Andrey Andreq',
                age: 30,
                country: 'Belarus',
                city: 'Vitebsk',
                phone: '+3755588843221',
                img: 'https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863',
                nickName: 'Alex_qqq',
                email: 'qweewfsdaf@gmail.cpm',
                birthday: '10 April 1997',
                publicationCount: 3,
                statusOnline: true,
                followed: true
            },
            {
                id: 5,
                userName: 'Andrey Andreq',
                age: 30,
                country: 'Belarus',
                city: 'Vitebsk',
                phone: '+3755588843221',
                img: 'https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863',
                nickName: 'Alex_qqq',
                email: 'qweewfsdaf@gmail.cpm',
                birthday: '10 April 1997',
                publicationCount: 3,
                statusOnline: true,
                followed: false
            },
        ])
    }


    const usersElements: JSX.Element[] = users.map((u: IUserList) => {

        debugger

        const btnsFollowElements: JSX.Element = u.followed ?
            <button onClick={() => unfollowAC(u.id)}>unfollow</button> :
            <button onClick={() => follow(u.id)}>follow</button>


        return (
            <div key={u.id}>
                <div>{u.userName}</div>
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