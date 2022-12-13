import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Portfolio } from "./Portfolio";

export function Main(): JSX.Element {
  return (
    <div className="App-main">
        <Home/>
        <Portfolio/>
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
