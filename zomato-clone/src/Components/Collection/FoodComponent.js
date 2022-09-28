import Collection from "./Collection";
import data from "../../data/data";
import "../../style.css";
function FoodCollection() {
  const imageArr = data.map((dat) => <Collection key={dat.id} info={dat} />);
  return (
    <article className="wrapper">
      <div className="upper-card">
        <img src={require("../../images/Family.jpeg")} alt="" />
        <div className="image-desp">
          <h3 className="title">Order Online</h3>
          <p className="description">stay home and order to your coorstep</p>
        </div>
      </div>
      <div className="middle-comp">
        <h2>collections</h2>
        <p>
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Motihari, based on trends
        </p>
        <section className="Food-collection">{imageArr}</section>
      </div>
    </article>
  );
}

export default FoodCollection;
