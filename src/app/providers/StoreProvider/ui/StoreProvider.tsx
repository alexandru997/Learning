import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';

interface StoreProviderPros {
    children?: ReactNode;
    initialState?:DeepPartial<StateSchema>
}

export const StoreProvider = (props: StoreProviderPros) => {
    const { children, initialState } = props;

    const store = createReduxStore(initialState as StateSchema);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
