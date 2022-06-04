import TopBar from "./components/topbar/topbar";
import Home from "./components/pages/Home";
import Single from "./components/pages/single/single";
import Write from "./components/pages/write/write";
import Setting from "./components/pages/setting/setting";
import Login from "./components/pages/login/login";
import Register from "./components/pages/register/register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const user = false;

  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/register" element={user ? <Home /> : <Register />} />

        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/setting" element={user ? <Setting /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
