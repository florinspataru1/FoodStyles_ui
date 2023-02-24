import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTodo} from "../actions/todos";

const initialTodoState = {
    id: null,
    title: "",
    completed: false
};

const AddTodo = () => {
    const [todo, setTodo] = useState(initialTodoState);

    const dispatch = useDispatch();

    const handleInputChange = event => {
        const {name, value} = event.target;
        setTodo({...todo, [name]: value});
    };

    const saveTodo = async (ev) => {
        ev.preventDefault();
        const {title} = todo;

        try {
            await dispatch(createTodo(title));
            setTodo(initialTodoState);
        } catch (e) {
            console.log('components::AddTodo::saveTodo', e)
        }
    };

    return (
        <div className="submit-form">
            <div>
                <div className="form-group">
                    <form onSubmit={saveTodo}>
                        <label className="title" htmlFor="title">Todo List</label>
                        <input
                            type="text"
                            className="form-list"
                            id="title"
                            required
                            value={todo.title}
                            onChange={handleInputChange}
                            name="title"
                            placeholder="Add a new todo"
                        />

                        <button onClick={saveTodo} className="btn btn-success">
                            Submit
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddTodo;
