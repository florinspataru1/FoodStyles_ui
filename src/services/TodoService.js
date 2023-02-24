import http from "../http-common";

const getAll = () => {
    return http.get("/todos/listTodos");
};

const getCompleted = () => {
    return http.get("/todos/completed");
};

const getUnCompleted = () => {
    return http.get("/todos/uncompleted");
};

const get = id => {
    return http.get(`/todos/${id}`);
};

const create = data => {
    return http.post("/todos/createTodo", data);
};

const markCompleted = (id) => {
    return http.put(`/todos/markTodoCompleted/${id}`);
};

const markUncompleted = (id) => {
    return http.put(`/todos/markTodoUncompleted/${id}`);
};

const remove = id => {
    return http.delete(`/todos/deleteTodo/${id}`);
};

const findByTitle = title => {
    return http.get(`/todos?title=${title}`);
};

const TodoService = {
    getAll,
    getCompleted,
    getUnCompleted,
    get,
    create,
    markCompleted,
    markUncompleted,
    remove,
    findByTitle
};

export default TodoService;
