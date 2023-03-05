import {connect} from 'react-redux';
import {ActionsTypes, AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';
import {followAC, IUserList, setUsersAC, unfollowAC} from '../../../redux/users-reducer';
import {UsersC} from './UsersC';


type MapStateToProps = {
    users: IUserList[]
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollowAC: (userId: number) => void
    setUsersAC: (users: IUserList[]) => void
}


const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionsTypes>): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollowAC: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsersAC: (users: IUserList[]) => {
            dispatch(setUsersAC(users))
        },
    }
}

export type UsersPropsType = MapStateToProps & MapDispatchPropsType
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)