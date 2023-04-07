import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import { AuthorizeUser } from "./middleware/auth";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/' element={<AuthorizeUser> <Home /> </AuthorizeUser>}></Route>
          <Route path='/profile' element={<AuthorizeUser> <Profile /> </AuthorizeUser>}></Route>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
