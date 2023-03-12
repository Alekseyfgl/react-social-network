import React from 'react';
import axios from 'axios';
import {IUserList} from '../../../redux/users-reducer';
import userMock from '../../../assets/img/user-mock.png';
import s from './Users.module.css';
import {UsersPropsType} from './UsersContainer';


export class UsersC extends React.Component<UsersPropsType> {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(r => {
                this.props.setUsers(r.data.items)
                this.props.setUsersCount(r.data.totalCount)
            })
    }


    onPageChanged = (pageNumber: number) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(r => {
                this.props.setUsers(r.data.items)
            })
        this.props.setCurrentPage(pageNumber)

    }

    usersElementsCreator = (): JSX.Element[] => {
        return this.props.users.map((u: IUserList) => {

            const btnsFollowElements: JSX.Element = u.followed ?
                <button onClick={() => this.props.unfollow(u.id)}>unfollow</button> :
                <button onClick={() => this.props.follow(u.id)}>follow</button>
            return (
                <div key={u.id}
                     className={s.users}>
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


    createPagesElements = (): JSX.Element[] => {
        const pagesCount: number = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        const pages: number[] = Array.from({length: pagesCount}, (_, index) => index + 1)

        return pages.map((p, i) => {
            const activePage: string = p === this.props.currentPage ? s.selected_page : ''
            return <span key={i}
                         className={`${s.page} ${activePage}`}
                         onClick={() => this.onPageChanged(p)}
            >
                {p}
            </span>
        })

    }

    render() {
        const usersElements: JSX.Element[] = this.usersElementsCreator();
        const pages: JSX.Element[] = this.createPagesElements();

        return (
            <div className={s.users}>
                <div>{pages}</div>
                {usersElements}
            </div>
        )
    }
}