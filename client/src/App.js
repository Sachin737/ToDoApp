import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";


function App() {
  return (
    <div className="App">
      <Header />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
