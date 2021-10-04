import * as types from "./../constants/ActionType";

var initialState = {
    id: '',
    name: '',
    status: true
};

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.EDIT:
            return action.task;
        default :
            return state
    }
}
export default myReducer;