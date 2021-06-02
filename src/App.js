import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import  Home  from './screens/Home';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
