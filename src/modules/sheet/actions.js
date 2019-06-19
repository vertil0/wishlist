export const actions = {
    switchTab: tab => (dispatch) => {
        dispatch({
            type: 'TAB_ACTION',
            payload: tab
        })
    },
    changePoints: points => (dispatch) => {
        dispatch({
            type: 'CHANGE_POINTS',
            payload: Number(points)
        })
    }
}