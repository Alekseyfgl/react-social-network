import {connect} from 'react-redux';
import {Messages} from './Messages';
import {ActionsTypes, IUserState} from '../../../redux/state.interface';
import {IMassagePageState, sendMessageCreator, updateNewMessageBodyCreator} from '../../../redux/dialogs-reducer';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';


type MapStateToPropsType = {
    messagesPage: IMassagePageState
    friendInfo: IUserState
    userInfo: IUserState
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