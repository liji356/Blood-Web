import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
import View from './component/View';
import Search from './component/Search';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Login/>}/>
      <Route path="/reg" exact element={<Register/>}/>
      <Route path="/view" exact element={<View/>}/>
      <Route path="/search" exact element={<Search/>}/>

    </Routes>
    
    </BrowserRouter>
    

    </>
    
  );
}

export default App;
