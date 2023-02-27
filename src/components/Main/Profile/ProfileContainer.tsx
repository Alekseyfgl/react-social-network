import {ActionsTypes} from '../../../redux/state.interface';
import {addPostAC, IInitialProfile, updateNewPostTextAC} from '../../../redux/profile-reducer';
import {connect} from 'react-redux';
import {Profile} from './Profile';
import {Dispatch} from 'redux';
import {AppStateType} from '../../../redux/redux-store';

type MapStatePropsType = {
    profilePage: IInitialProfile
}

type MapDispatchPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionsTypes>): MapDispatchPropsType => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text));
        },
        addPost: () => {
            dispatch(addPostAC())
        },
    }
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);