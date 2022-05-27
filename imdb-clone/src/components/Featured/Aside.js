import "../../style.css";
function Aside({ aside }) {
  return (
    <aside className="aside">
      <section>
        <img className="aside-img" src={require(`../../${aside.url}`)} alt="" />
      </section>
      <div>
        <i class="ri-play-circle-line"></i>

        <p className="aside-title">{aside.title}</p>
        <p className="aside-info">{aside.info}</p>
      </div>
    </aside>
  );
}
export default Aside;
