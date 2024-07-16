import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import Start from './Start.jsx';
import TestPage from './TestPage.jsx';
import Home from './Home.jsx';
import NotFound from './NotFound.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Start/>}></Route>
          <Route path='/TestPage' element={<TestPage/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
