import "../style.css";

function Card(props) {
  return (
    <div class="card">
      <img src={require(`../images/${props.item.coverImg}`)} alt="startimg" />
      <p class="top-p">
        <img src={require("../images/star.png")} alt="starimage" />
        <span class="rating">({props.item.stats.rating})</span>
        <span class="light">{props.item.location}</span>
      </p>
      <p class="descp">{props.item.title}</p>
      <h4 class="price">from {props.item.price}/person</h4>
    </div>
  );
}

export default Card;
