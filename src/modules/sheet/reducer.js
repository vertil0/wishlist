const initialState = {
    tab: '1',
    points: 100,
    character: {
        ST: 10,
        DX: 10,
        IT: 10,
        HT: 10
    }
}
export const NAME = 'Root'
export function reducer(state = initialState, action) {
    switch (action.type) {
        case 'TAB_ACTION':
            return {
                ...state,
                tab: action.payload
            }
        case 'CHANGE_POINTS':
            return {
                ...state,
                points: action.payload
            }
        default:
            return {...state}
    }
}