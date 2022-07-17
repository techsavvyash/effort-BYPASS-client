
import './App.css';
import Login from './Components/login';
import Question from './Components/question';
import SignUp from './Components/signup';
import Error from './Components/error';
import QuesAdd from './Components/QuesAdd';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App"> 
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/question/:id' element={<Question />} />
      <Route path='/add-question' element={<QuesAdd />} />
      <Route path="*" element={<Error />} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
