import {connect} from 'react-redux';
import {Messages} from './Messages';

import {MassagePageType, sendMessageCreator, updateNewMessageBodyCreator} from '../../../redux/dialogs-reducer';
import {ActionsTypes, AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';
import {InitialUserState} from '../../../redux/user-info-reducer';


type MapStateToPropsType = {
    messagesPage: MassagePageType
    friendInfo: InitialUserState
    userInfo: InitialUserState
}

type MapDispatchPropsType = {
    updateTextInMessage: (text: string) => void
    sendMessage: () => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        messagesPage: state.messagesPage,
        friendInfo: state.friendInfo,
        userInfo: state.userInfo
    }
}

export type MessagePropsType = MapStateToPropsType & MapDispatchPropsType

const mapDispatchToProps = (dispatch: Dispatch<ActionsTypes>): MapDispatchPropsType => {
    return {
        updateTextInMessage: (text: string) => {
            dispatch(updateNewMessageBodyCreator(text))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
    }
}

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);