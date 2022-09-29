import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./components/Dashboard/Admin/Admin";
import Student from "./components/Dashboard/Student/Student";
import Teacher from "./components/Dashboard/Teacher/Teacher";
import Resource from "./components/eResourcs/Resource";
import Chat from "./components/SocialChat/Chat";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Auth/Login";
import Quiz from "./components/Quiz/Quiz";
import Main from "./components/Dashboard/Main/Main";


function App() {
 
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/student" element={<Student />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/resource" element={<Resource />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/Quiz" element={<Quiz />} />

      </Routes>
      
    </div>
  );
}

export default App;
