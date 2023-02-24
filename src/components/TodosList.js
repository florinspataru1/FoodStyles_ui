import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {retrieveTodos, updateTodo} from "../actions/todos";
import AddTodo from "./AddTodo";


const TodosList = () => {
    const [activeButton, setActiveButton] = useState('All');
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveTodos());
    }, [dispatch]);

    const toggleTodo = (todo, status) => {
        dispatch(updateTodo(todo.id, status));
    };

    return (
        <div className="container-todo-list">
            <div className="container-list">
                <div className="list">
                    <div className="list-content">
                        <div className="icon-todo">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="32"
                                viewBox="0 0 40 32"
                            >
                                <g fill="none" fill-rule="evenodd">
                                    <path
                                        fill="#4A4AE5"
                                        d="M2.577 10.006L13.998 10.013 14.005 21.638 2.584 21.631z"
                                        transform="rotate(-45 8.29 15.822)"
                                    />
                                    <path
                                        fill="#4A77E5"
                                        d="M18.337 -0.692L29.758 -0.699 29.737 32.749 18.316 32.756z"
                                        transform="rotate(45 24.037 16.028)"
                                    />
                                </g>
                            </svg>
                        </div>
                        <AddTodo/>
                        <div className="col-list">
                            <h4 className="title-list">Todos List</h4>
                            <ul className="list-group">
                                {todos &&
                                    todos.map((todo, index) => (
                                        <li className={"list-group-item "} key={index}>
                                            <input
                                                type={"checkbox"}
                                                checked={todo.completed}
                                                onChange={(ev) => toggleTodo(todo, ev.target.checked)}
                                            />
                                            {todo.title}
                                            <button className="delete-button">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="11"
                                                    height="11"
                                                    viewBox="0 0 11 11"
                                                >
                                                    <path
                                                        fill="#BFBFBF"
                                                        fill-rule="evenodd"
                                                        d="M10.68.32c-.426-.426-1.116-.426-1.542 0L5.545 3.912 1.953.32C1.525-.094.845-.088.423.333c-.42.42-.426 1.101-.012 1.53l3.592 3.592L.41 9.047c-.284.274-.398.68-.298 1.06.1.382.398.68.78.78.38.1.786-.014 1.06-.298l3.592-3.592 3.593 3.592c.428.414 1.108.408 1.53-.013.42-.42.426-1.101.012-1.53L7.088 5.456l3.592-3.593c.426-.426.426-1.116 0-1.542z"
                                                    />
                                                </svg>
                                            </button>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                        <div className="filter-list">
                            <p className="filter-description">Show:</p>
                            <button
                                className={`filter-button ${activeButton === 'All' ? 'active' : 'not-active'}`}
                                onClick={() => setActiveButton('All')}
                            >
                                All
                            </button>
                            <button
                                className={`filter-button ${activeButton === 'Completed' ? 'active' : 'not-active'}`}
                                onClick={() => setActiveButton('Completed')}
                            >
                                Completed
                            </button>
                            <button
                                className={`filter-button ${activeButton === 'Incompleted' ? 'active' : 'not-active'}`}
                                onClick={() => setActiveButton('Incompleted')}
                            >
                                Incompleted
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodosList;
