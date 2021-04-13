
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import './App.css';

import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
