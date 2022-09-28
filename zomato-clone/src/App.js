import Home from "./pages/Home";
import Investor from "./pages/Investor";
import { Routes, Route } from "react-router-dom";
import Resturant from "./pages/Resturant";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/investor" element={<Investor />} />
        <Route path="/resturant" element={<Resturant />} />
      </Routes>
    </div>
  );
}
export default App;
