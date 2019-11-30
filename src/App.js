import React from 'react';
import './App.css';
import Comp1 from './components/Comp1/Comp1';
import TodoList from './components/MyApp/TodoList';
import About from './components/MyApp/About';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <header className="App-header">
   
    <Comp1 name="My Mistress"/>
    <Router>  
      <span>
      <Link to='/about'>About</Link>
      <Link to='/'>Home</Link>
      </span>
      <Switch>
        <Route path="/about">
          <About />
        </Route> 
        <Route  key={1} path="/active">
          <TodoList filter="ACTIVE" />
        </Route>
        <Route key={2} path="/done">
          <TodoList  key='COMPLETED' filter='COMPLETED' />
        </Route>
        <Route key={3} path="/">
          <TodoList filter='ALL'/>
        </Route>
      </Switch> 
    </Router> 
      
    </header>
    </div>
  );
}

export default App;
