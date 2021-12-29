import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import Login from "./pages/login";
import TodoApp from "./pages/todoApp";

export default () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/todoapp' element={<TodoApp/>}/>
            </Routes>
        </BrowserRouter>
    )
}