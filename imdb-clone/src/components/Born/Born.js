import "../../style.css";
function Born({ list }) {
  return (
    <div className="circle">
      <figure className="circle-figure">
        <img src={list.url} alt="" />
      </figure>
      <div>
        <p>{list.name}</p>
        <p>{list.age}</p>
      </div>
    </div>
  );
}
export default Born;
