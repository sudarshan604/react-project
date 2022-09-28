import "../../style.css";
function Collection({ list }) {
  return (
    <div className="collection">
      <h4>{list.id}</h4>
      <div>
        <p>{list.pa}</p>
        <h4 className="price">{list.price}</h4>
      </div>
    </div>
  );
}
export default Collection;
