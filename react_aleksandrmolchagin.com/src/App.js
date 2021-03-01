import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import home from "./pages/home";


function App() {
  return (
    
    <Router> 
        <style type="text/css">{`
              @font-face {
              font-family: 'MaterialIcons';
              src: url(${require('react-native-vector-icons/Fonts/MaterialIcons.ttf')}) format('truetype');
              }

              @font-face {
              font-family: 'FontAwesome';
              src: url(${require('react-native-vector-icons/Fonts/FontAwesome.ttf')}) format('truetype');
              }
        `}
        </style> 
        <div>
          <Switch>
            <Route exact path="/" component={home}/>
          </Switch>
        </div>
     </Router>
  );
}

export default App;
