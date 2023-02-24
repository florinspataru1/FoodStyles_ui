import {
    COMPLETED_TODOS,
    CREATE_TODO,
    DELETE_TODO,
    RETRIEVE_TODOS,
    UNCOMPLETED_TODOS,
    UPDATE_TODO
} from "../actions/types";

const initialState = [];

const todoReducer = (todos = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case CREATE_TODO:
            return [...todos, payload];

        case RETRIEVE_TODOS:
            return payload;

        case UPDATE_TODO:
            return todos.map((todo) => {
                if (todo.id === payload.id) {
                    return {
                        ...todo,
                        ...payload,
                    };
                } else {
                    return todo;
                }
            });

        case COMPLETED_TODOS:
            return payload;

        case UNCOMPLETED_TODOS:
            return payload;

        case DELETE_TODO:
            return todos.filter(({id}) => id !== payload.id);

        default:
            return todos;
    }
};

export default todoReducer;
