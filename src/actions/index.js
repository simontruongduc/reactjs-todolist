import * as types from "./../constants/ActionType";

export const listTask = () => {
    return {
        type : types.LIST_TASK
    }
};

export const add = (task) => {
    return {
        type : types.ADD,
        task
    }
};

export const toggleForm = () => {
    return {
        type : types.TOGGLE_FORM
    }
}

export const openForm = () => {
    return {
        type : types.OPEN_FORM
    }
}

export const closeForm = () => {
    return {
        type : types.CLOSE_FORM
    }
}

export const updateStatus = (id) => {
    return {
        type : types.UPDATE_STATUS,
        id
    }
}

export const deleteTask = (id) => {
    return {
        type : types.DELETE,
        id
    }
}

export const update = (task) => {
    return {
        type : types.UPDATE,
        task
    }
}

export const edit = (task) =>{
    return {
        type : types.EDIT,
        task
    }
}