import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import TodosList from "./components/TodosList";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<TodosList/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
