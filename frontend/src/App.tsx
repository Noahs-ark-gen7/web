import React from "react";

import Login from "../components/login";
import Contents from "../components/contents";
import { Route, Routes } from "react-router";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/contents" element={<Contents/>} />
        </Routes> 
    );
};

export default App;
