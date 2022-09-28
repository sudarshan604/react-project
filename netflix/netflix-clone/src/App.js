import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<p>i am in signup</p>}></Route>
        <Route path="/signin" element={<p>i am in signin</p>}></Route>
        <Route path="/browse" element={<p>i am in browse</p>}></Route>
        <Route path="/" element={<p>i am going to</p>}></Route>
      </Routes>
    </Router>
  );
}
