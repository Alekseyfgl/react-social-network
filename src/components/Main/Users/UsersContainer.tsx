import {connect} from 'react-redux';
import {ActionsTypes, AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';
import {followAC, IUserList, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from '../../../redux/users-reducer';
import {UsersC} from './UsersC';


type MapStateToProps = {
    users: IUserList[],
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: IUserList[]) => void
    setCurrentPage: (currentPage: number) => void
    setUsersCount: (totalUsersCount: number) => void
}


const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionsTypes>): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: IUserList[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        }
    }
}

export type UsersPropsType = MapStateToProps & MapDispatchPropsType
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)