import logo from './logo.svg';
import './App.css';
import Signin from './components/signin';
import Signup from './components/signup';
import Reciepe from './components/reciepe';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<Signup/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/reciepe' element={<Reciepe/>}/>
        </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
