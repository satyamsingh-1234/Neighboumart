import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbars from './components/Navbar';
import Home from "./pages/Home";
import CreateGroup from './pages/CreateGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import BrowseGroup from './pages/BrowseGroup';
import GroupDetails from './pages/GroupDetails';
import MyGroups from './pages/MyGroup';
import AboutUs from "./pages/Aboutus"
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';

let App = () => {
  return (
    <BrowserRouter>
      <Navbars />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateGroup />} />
        <Route path="/browse" element={<BrowseGroup />} />
        <Route path="/group/:id" element={<GroupDetails />} />
        <Route path="/mygroups" element={<MyGroups />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;