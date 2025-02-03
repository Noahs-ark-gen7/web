import Login from "./components/Login";
import Contents from "./components/Contents";
import NewContents from "./components/NewContent";
import { Route, Routes } from "react-router";

const App = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/contents" element={<Contents />} />
                <Route path="/new-contents" element={<NewContents />} />
            </Routes>
        </div>
    );
};

export default App;
