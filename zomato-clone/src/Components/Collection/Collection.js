import { Fragment } from "react";
import "../../style.css";
function Collection({ info }) {
  // console.log(info);
  return (
    <article className="image-prof">
      <img src={require(`../../${info.image}`)} alt="" />
      <h4 className="review">{info.RestruantType}</h4>
      <p className="plate">{info.totalPlace}</p>
    </article>
  );
}
export default Collection;
