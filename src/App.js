
import { BrowserRouter, Route, Routes,HashRouter } from 'react-router-dom';
import './App.css';
import News from './Components/Newscard/News';
import Navbar from './Components/Navbar';
// import Dawer from './Components/Newscard/Dawer';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { useState } from 'react';

function App() {
 
  return (
    <>
    <HashRouter>
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
    </HashRouter>
 
    </>
  );
}

export default App;
