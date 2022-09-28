import React, { useEffect } from "react";
import Tour from "./Components/Tour";
function App() {
  const [allData, setAllData] = React.useState([]);

  const url = "https://course-api.com/react-tours-project";

  async function fetchUrl() {
    const res = await fetch("https://course-api.com/react-tours-project");
    const jsonData = await res.json();
    console.log(jsonData);
  }

  useEffect(() => {
    <p>loading</p>;
    setTimeout(fetchUrl, 3000);
  }, []);

  return (
    <div>
      {/* {<Tour />}
      <h1>hellp</h1> */}
    </div>
  );
}

export default App;
