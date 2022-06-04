import "./single.css";
import Sidebar from "../../sidebar/sidebar";
import SinglePost from "../../singlePost/SinglePost";
function Single() {
  return (
    <div className="single">
      <SinglePost />

      <Sidebar />
    </div>
  );
}
export default Single;
