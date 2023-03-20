import { Provider } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Productdetails from './Components/productdetails';
import Products from './Components/Products';
import ProtectedRoutes from './Components/ProtectedRoutes';
import store from './Components/Redux/store';
import Users from './Components/Users';
function App() {

  return (
    <div className="App">
      <Provider store={store}>
     
      <Routes>

      <Route path='/login' element={<Login/>}/>
      </Routes>
      <Navbar/>
      <Routes>
      <Route path='/' element={<ProtectedRoutes Component =  {Home}/>}/>
      <Route path='/home' element={<ProtectedRoutes Component =  {Home}/>}/>
      <Route path='/products' element={ <ProtectedRoutes Component={Products} />}>
          <Route path='/products:category' element={ <ProtectedRoutes Component={Products} />}></Route>
          </Route>
      <Route   path="/productdetails/:id" element={<Productdetails /> }/>
      <Route path='/user' element={<ProtectedRoutes Component =  {Users}/>}/>
      <Route path='/contact' element={<ProtectedRoutes Component =  {Contact} />}/>
      <Route path='/*' element={<>404 Page Not Found</>}/>
      </Routes>
      </Provider>
    </div>
  );
}

export default App;
