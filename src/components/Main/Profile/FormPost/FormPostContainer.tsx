import {FormPost} from './FormPost';
import {addPostAC, updateNewPostTextAC} from '../../../../redux/profile-reducer';
import React from 'react';
import {ActionsTypes, IState} from '../../../../redux/state.interface';
import {connect} from 'react-redux';


const mapStateToProps = (state: IState) => {
    return {
        newPostText: state.profilePage.posts.newPostText
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

export const FormPostContainer = connect(mapStateToProps, mapDispatchToProps)(FormPost);