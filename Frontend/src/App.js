import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import ProductAdd from './ProductAdd';
import Productlist from './Productlist';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout />}>
      <Route path='/productadd' element={<ProductAdd />}></Route>
      <Route path='/productlist' element={<Productlist />}></Route>
      </Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
