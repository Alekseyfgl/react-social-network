import {FormPost} from './FormPost';
import {addPostAC, updateNewPostTextAC} from '../../../../redux/profile-reducer';
import React, {FC} from 'react';
import {StoreContext} from '../../../../store-context/StoreContext';

interface IFormPostContainerProps {
    // store: IStore
}

export const FormPostContainer: FC<IFormPostContainerProps> = (props) => {
    // const {store} = props


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const onAddPost = (): void => {
                        store.dispatch(addPostAC())
                    };

                    const onPostChange = (text: string) => {
                        store.dispatch(updateNewPostTextAC(text));
                    };

                    return (<FormPost updateNewPostText={onPostChange}
                                      addPost={onAddPost}
                                      newPostText={store.getState().profilePage.posts.newPostText}/>
                    )
                }
            }

        </StoreContext.Consumer>

    );
}