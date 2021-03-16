import './App.css';
import ReactRouter from './reactRouter';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function App() {

  return (
    
      <Router history={Router}>
        <Route path="/" component={App}>
          <ReactRouter component={Home} />
          <Route path="home" component={Home} />
          <Route path="about" component={About} />
          <Route path="contact" component={Contact} />
        </Route>
      </Router>
   
  );

}

export default App;
