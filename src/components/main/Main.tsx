import { Route, Routes } from "react-router-dom";

export function Main(): JSX.Element {
  return (
    <div className="App-main">
        <Switcher/>
    </div>
  )
}

function Switcher(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<></>} />
    </Routes>
  );
}
