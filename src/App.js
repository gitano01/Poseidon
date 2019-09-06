import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route, Link} from "react-router-dom";
import Login from './login';
class App extends React.Component{

    render(){
        return(
          <div className="App">
              <h1>Home</h1>
              <Router>
                  <div>
                      <Link to="/login">Iniciar sesión</Link>
                      <Route path="/login" component={Login}/>
                  </div>
              </Router>

          </div>
        );
    }

}

export default App;
