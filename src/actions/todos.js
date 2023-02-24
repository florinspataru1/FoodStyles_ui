import {CREATE_TODO, DELETE_TODO, RETRIEVE_TODOS, UPDATE_TODO,} from "./types";

import TodoDataService from "../services/TodoService";

export const createTodo = (title) => async (dispatch) => {
    try {
        const res = await TodoDataService.create({title});

        dispatch({
            type: CREATE_TODO,
            payload: res.data,
        });

        return res.data;
    } catch (err) {
        return Promise.reject(err);
    }
};

export const retrieveTodos = () => async (dispatch) => {
    try {
        const res = await TodoDataService.getAll();

        dispatch({
            type: RETRIEVE_TODOS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const updateTodo = (id, checkStatus) => async (dispatch) => {
    try {
        const res = await (checkStatus ? TodoDataService.markCompleted(id) : TodoDataService.markUncompleted(id));

        dispatch({
            type: UPDATE_TODO,
            payload: {
                id,
                completed: checkStatus
            },
        });

        return res.data;
    } catch (err) {
        return Promise.reject(err);
    }
};

export const deleteTodo = (id) => async (dispatch) => {
    try {
        await TodoDataService.remove(id);

        dispatch({
            type: DELETE_TODO,
            payload: {id},
        });
    } catch (err) {
        console.log(err);
    }
};

export const findTodosByTitle = (title) => async (dispatch) => {
    try {
        const res = await TodoDataService.findByTitle(title);

        dispatch({
            type: RETRIEVE_TODOS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};
