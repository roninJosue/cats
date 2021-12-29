import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {createBrowserHistory} from "history";
import RandomCat from "./components/RandomCat";
import GreetingCat from "./components/GreetingCat";
import './App.css';

const defaultHistory = createBrowserHistory();

function App({history = defaultHistory}) {
  return (
    <Router history={history}>
      <Routes>
        <Route exact path='/' element={<RandomCat />} />
        <Route exact path='/cat/:greeting' element={<GreetingCat />} />
      </Routes>
    </Router>
  );
}

export default App;
