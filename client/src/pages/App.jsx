import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import Start from './Start.jsx';
import TestPage from './TestPage.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';
import NotFound from './NotFound.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Start/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/testpage' element={<TestPage/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
