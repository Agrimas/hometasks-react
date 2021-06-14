const CHANGE_THEME = 'themeReducer/CHANGE_THEME';

export type themeType = 'some' | 'dark' | 'red'

type ActionType = changeThemeActionType

const initState = {
    theme: 'some' as themeType
};

export const themeReducer = (state = initState, action: ActionType): typeof initState => { // fix any
    switch (action.type) {
        case CHANGE_THEME: {
            return {
                ...state,
                theme: action.theme
            };
        }
        default:
            return state;
    }
};

type changeThemeActionType = {
    type: typeof CHANGE_THEME
    theme: themeType
}
export const changeThemeC = (theme: themeType): changeThemeActionType => ({
    type: CHANGE_THEME,
    theme
}); // fix any