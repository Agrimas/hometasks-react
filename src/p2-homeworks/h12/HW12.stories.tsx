import React from 'react';
import {Story, Meta} from '@storybook/react';
import HW12 from './HW12'
import store from '../h10/bll/store';
import {Provider, useDispatch} from 'react-redux';
import {changeThemeC} from './bll/themeReducer';

export default {
    title: 'HW12',
    component: HW12,
    decorators: [
        (Story) => (
            <Provider store={store}>
                <Story/>
            </Provider>
        ),
    ],
} as Meta;

export const Red = () => {
    const dispatch = useDispatch();
    dispatch(changeThemeC('red'))
    return <HW12/>
}

export const Dark = () => {
    const dispatch = useDispatch();
    dispatch(changeThemeC('dark'))
    return <HW12/>
}

export const Some = () => {
    const dispatch = useDispatch();
    dispatch(changeThemeC('some'))
    return <HW12/>
}