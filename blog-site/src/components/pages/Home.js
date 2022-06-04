import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import Posts from "../posts/Posts";
import "./Home.css";
function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
