
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css';
import News from './Components/Newscard/News';
import Navbar from './Components/Navbar';


function App() {
 
  return (
    <>
    <BrowserRouter>
    <div>
          <Navbar/>
          
        <Routes >
            <Route path='/' element={<News category={""}/>}></Route>
            <Route path='/sports' element={<News category={"sports"}/>}></Route>
            <Route path='/business' element={<News category={"business"}/>}></Route>
            <Route path='/entertainment' element={<News category={"entertainment"}/>}></Route>
            <Route path='/health' element={<News category={"health"}/>}></Route>
            <Route path='/science' element={<News category={"science"}/>}></Route>
            <Route path='/technology' element={<News category={"technology"}/>}></Route>
        </Routes>
    </div>
    </BrowserRouter>
 
    </>
  );
}

export default App;
