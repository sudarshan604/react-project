import "../../style.css";
function Featured({ list }) {
  console.log(list);
  return (
    <figure>
      <img className="img" src={require(`../../${list.url}`)} alt="" />
      <h3 className="tag">{list.tag}</h3>
      <p className="info">{list.info}</p>
    </figure>
  );
}

export default Featured;
