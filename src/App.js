import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar";
import CatagoryQuizes from "./Pages/CatagoryQuizes";
import Blog from "./Pages/Blog";
import Statistics from "./Pages/Statistics";
import Error from "./Pages/Error";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/catagory-quizes/:id' element={<CatagoryQuizes/>}/>
        <Route path='/statistics' element={<Statistics/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
