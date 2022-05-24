import Collection from "./FoodComponent";
import data from "../../data";
function FoodCollection() {
  return (
    <article>
      <div>
        <img src={require("../../images/Family.jpeg")} alt="" />
      </div>

      {data.map((dat) => (
        <Collection info={dat} />
      ))}
    </article>
  );
}

export default FoodCollection;
