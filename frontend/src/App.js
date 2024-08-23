import Login from "./components/pages/Login";
import { Routes, Route } from "react-router-dom"
import SignUp from "./components/pages/SignUp";
import Mypage from "./components/pages/Mypage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/mypage" element={<Mypage></Mypage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
