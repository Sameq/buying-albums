import Home from "../pages/home/Home";
import InitalPage from "../pages/initalpage/InitalPage";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyAlbums from "../pages/myalbums/MyAlbums";
import PrivateRoute from "./PrivateRouter";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InitalPage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path='/' element={<PrivateRoute/>}>
            <Route path='/home' element={<Home/>}/>
            <Route path='/myAlbums' element={<MyAlbums/>}/>
        </Route>
        {/* <PrivateRoute path="/home" component={Home}/> */}
        {/* <PrivateRoute path="/myAlbums" component={MyAlbums}/> */}
      </Routes>
    </Router>
  );
}
