import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./Home";

export function Main(): JSX.Element {
  return (
    <div className="App-main">
        
        <Switcher/>
    </div>
  )
}

function Switcher(): JSX.Element {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
    </Router>
  );
}
