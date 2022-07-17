import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer'
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Login/Register/Register';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Data from './Components/Data/Data';
import CardDetail from './Components/CardDetail/CardDetail';
import AddCard from './Components/AddCard/AddCard';
import Inventory from './Components/Inventory/Inventory';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/data' element={<Data></Data>}></Route>
        <Route path='/service/:serviceId' element={<CardDetail></CardDetail>}></Route>

        <Route path='inventory' element={
          <PrivateRoute>
            <Inventory></Inventory>
          </PrivateRoute>
        }></Route>

        <Route path='addCard' element={
          <PrivateRoute>
            <AddCard></AddCard>
          </PrivateRoute>
        }></Route>


        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<Register></Register>}></Route>



        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
      <ToastContainer />


    </div>
  );
}

export default App;
