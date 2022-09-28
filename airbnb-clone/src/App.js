import Navbar from "./components/Nabbar";
import Hero from "./components/Hero";
import data from "./data";
import Card from "./components/Card";
import "./style.css";
function App() {
  const cardArray = data.map((dat) => {
    return <Card item={dat} />;
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <div class="card-list">{cardArray}</div>
    </div>
  );
}

export default App;
