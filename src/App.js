import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Card from './components/Card/Card';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Product from './components/Product/Product';



function App() {
  return (
    <Router>
      <Switch>
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <Card/>
        <Route path="/product" exact><Product/></Route>
      </div>
    </div>
    </Switch>
    </Router>
  );
}

export default App;
