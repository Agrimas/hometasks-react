const SET_LOADING = 'loadingReducer/SET_LOADING';

type ActionType = loadingActionType;

const initState = {
    loading: false
};
type initStateType = typeof initState;

export const loadingReducer = (state = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        case SET_LOADING: {
            return {
                ...state,
                loading: action.loading
            };
        }
        default:
            return state;
    }
};

type loadingActionType = {
    type: typeof SET_LOADING
    loading: boolean
}
export const loadingAC = (loading: boolean): loadingActionType => ({type: SET_LOADING, loading}); // fix any