import Header from "./Components/Header/Header";
import Between from "./Components/Header/Between";
import "./style.css";
import FoodCollection from "./Components/Collection/FoodComponent";
function App() {
  return (
    <div className="App">
      <div
        className="header"
        style={{
          backgroundImage:
            "url( 'https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png')",
        }}
      >
        <Header />
        <Between />
        <FoodCollection />
      </div>
    </div>
  );
}

export default App;
