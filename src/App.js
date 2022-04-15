
import './App.css';
import Login from './Components/login';
import Question from './Components/question';
import SignUp from './Components/signup';
import Error from './Components/error';

function App() {
  return (
    <div className="App">
      <Login/>
      <SignUp/>
     
      <Error/>
    </div>
  );
}

export default App;
