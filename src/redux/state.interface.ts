export interface IAuthorState {
    name: string;
    img: string;
}

export interface IPostState {
    id: number;
    date: string;
    text: string;
    img: string | null;
}

export interface IMsgState {
    id: number;
    user: string;
}

export interface IProfile {
    author: IAuthorState;
    newPostText: string;
    post: IPostState[];
}

export interface IProfilePageState {
    posts: IProfile
}

export interface IMassagePageState {
    newMassageText: string
    dialogs: IMsgState[];
}

export interface IState {
    userInfo: IUserState
    profilePage: IProfilePageState
    messagesPage: IMassagePageState
    friendInfo: IFriendInfoState
}

export interface IUserState {
    id: number
    userName: string
    age: number
    country: string
    city: string
    phone: string
    img: string
    nickName: string
    email: string
    birthday: string
    publicationCount: number,
    statusOnline: boolean,
}


export interface IFriendInfoState extends IUserState {
    messageInChat: IMessageState[]
}

export interface IMessageState {
    id: number
    userId: number
    date: string
    text: string
}
