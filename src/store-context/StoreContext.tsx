import React, {ReactNode} from 'react';
import {IStore} from '../redux/state.interface';


export const StoreContext = React.createContext({} as IStore);

interface IProviderProps {
    store: IStore
    children: ReactNode
}

export const Provider = (props: IProviderProps) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}