export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEMORY_CLEAR = "MEMORY_CLEAR";
export const MEMORY_PLUS = "MEMORY_PLUS";

export const addOne = (number) => {
    return({type:ADD_ONE, payload:number});
}

export const applyNumber = () => {
    return({type:APPLY_NUMBER});
}
export const changeOperator = (number) => {
    return({type:CHANGE_OPERATION, payload:number});
}
export const clearDisplay = () => {
    return { type: CLEAR_DISPLAY };

};
export const memoryClear = () => {
    return { type: MEMORY_CLEAR };
};
export const memoryPlus = (total) => {
    return { type: MEMORY_PLUS, payload: total };
};
