import * as types from "./../constants/ActionType";

var initialState = false;

var myReducer = (state = initialState,action) => {
    switch (action.type){
        case types.TOGGLE_FORM:
            return state = !state;
        case types.OPEN_FORM:
            return state = true;
        case types.CLOSE_FORM:
            return state = false;
        default : return state
    }
}



export default myReducer;