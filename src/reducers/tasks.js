import * as types from "./../constants/ActionType";

var randomId = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(6);
}

var findIndex = (tasks,id) => {
    var res = -1;
    tasks.forEach((task,index)=>{
        if(task.id === id){
            res = index;
        }
    })
    return res;
}
// lấy data từ local storage
var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data : [];

var myReducer = (state = initialState,action) => {
    var index = '';
    var task = null;
    switch (action.type){
        case types.LIST_TASK:
            return state;
        case types.ADD:
            task = {
                id:randomId(),
                name: action.task.name,
                status: action.task.status == 1 ? true : false,
            }
            state.push(task);
            localStorage.setItem('tasks',JSON.stringify(state));
            return [...state];
        case types.UPDATE_STATUS:
            index = findIndex(state,action.id);
            if(index !== -1){
                task = {...state[index]};
                task.status = !task.status;
                state[index] = task;
                localStorage.setItem('tasks', JSON.stringify(state));
            }
            return [...state];
        case types.DELETE:
            index = findIndex(state,action.id);
            if(index !== -1){
                state.splice(index,1);
                localStorage.setItem('tasks', JSON.stringify(state));
            }
            return [...state];
        case types.UPDATE:
            index = findIndex(state,action.task.id);
            if(index !== -1){
                task = {
                    id: action.task.id,
                    name : action.task.name,
                    status : action.task.status == 1 ? true : false,
                }
                state[index] = task;
                localStorage.setItem('tasks', JSON.stringify(state));
            }
            return [...state];
        default : return state
    }
}



export default myReducer;