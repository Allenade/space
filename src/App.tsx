import { HashRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./page/Home";
import Header from "./component/header/Header";
import Destination from "./page/destination/Destination";
import Crew from "./page/crew/Crew";
import Technology from "./page/technology/Technology";

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
