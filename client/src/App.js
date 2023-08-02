import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import { useContext } from "react";
import { themeContext } from "./context/themeContext";

function App() {
  const [theme] = useContext(themeContext);
  return (
    <div className="App" data-theme={theme}>
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
