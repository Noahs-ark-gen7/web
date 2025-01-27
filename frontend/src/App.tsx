import Login from "../components/Login";
import Contents from "../components/Contents";
import NewContents from "../components/NewContent";
import { Route, Routes } from "react-router";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/contents" element={<Contents/>} />
            <Route path="/newcontents" element={<NewContents/>} />
        </Routes> 
    );
};

export default App;
