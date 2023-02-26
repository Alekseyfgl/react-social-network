import {ActionsTypes, IState} from '../../../redux/state.interface';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer';
import {connect} from 'react-redux';
import {Profile} from './Profile';


const mapStateToProps = (state: IState) => {
    return {
        profilePage: state.profilePage,
    }
}

const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
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