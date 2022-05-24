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
      </div>
      <FoodCollection />
      <section className="localities">
        <h2>Popular Localities in and around Motihari</h2>
        <div>
          <h2>Motihari Locaility</h2>
          <p>127 places</p>
        </div>
      </section>
      <section className="app">
        <img
          src="https://b.zmtcdn.com/data/o2_assets/a500ffc2ab483bc6a550aa635f4e55531648107832.png"
          alt="mobile phone"
        />
        <aside>
          <h2>Get the Zomato App</h2>
          <p>
            We will send you a link, open it on your phone to download the app
          </p>
          <div>
            <label>
              <input type="radio" />
              Email
            </label>
            <label>
              Phone
              <input type="radio" />
            </label>
          </div>
          <label>
            <input type="text" />
            share App Link
          </label>

          <p>Download app from</p>
        </aside>
      </section>
    </div>
  );
}

export default App;
