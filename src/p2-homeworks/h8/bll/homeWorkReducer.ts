import {UserType} from '../HW8';

type ActionType = {
    type: 'sort' | 'check'
    payload: 'up' | 'down' | number
}

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const sortedState = [...state];
            return sortedState.sort((userA, userB) => {
                const result = userA.name.localeCompare(userB.name, 'ru');
                return action.payload === 'up' ? result : result * -1;
            })
        }
        case 'check': {
            return state.filter(user => user.age > action.payload);
        }
        default:
            return state
    }
}