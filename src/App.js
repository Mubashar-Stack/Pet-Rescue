
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import './App.css';

import Contact from './pages//public/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages//public/Home';
import Login from './pages//public/Login';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
        </Switch>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
