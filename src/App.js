
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Main from './components/Main/Main';
import Detail from './components/Detail/Detail';
import Pagination from './components/Buscador/Pagination';
import Landing from './components/Landing/Landing';

export default function App() {
  return (
    <div className="App">
      <Routes>
      <Route  path='/' element={<Landing/>} />
      <Route path="/home" element={<Main />} /> 
      <Route path="/detail/:id" element={<Detail/>} /> 
      <Route path='/page=' element={<Pagination/>}/>
      </Routes> 
    </div>
  );
}


