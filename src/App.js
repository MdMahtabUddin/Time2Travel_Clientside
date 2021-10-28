import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Switch} from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      


       <BrowserRouter>
<Navbar></Navbar>
       <Switch>


       </Switch>
       </BrowserRouter>
    </div>
  );
}

export default App;
