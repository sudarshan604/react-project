import "./setting.css";
import Sidebar from "../../sidebar/sidebar";
function Setting() {
  return (
    <div className="setting">
      <div className="setting-wrapper">
        <div className="setting-title">
          <span className="setting-update-title">update your Account</span>
          <span className="setting-delete-title">Delete Account</span>
        </div>
        <form className="setting-form">
          <label>Profile Picture</label>
          <div className="setting-pp">
            <img src="https://source.unsplash.com/random" alt="" />

            <label for="file-input">
              <i className="setting-pp-icon fa-solid fa-user"></i>
            </label>
            <input type="file" id="file-input" style={{ display: "none" }} />
          </div>
          <label>username</label>
          <input type="text" placeholder="safak" />
          <label>Email</label>
          <input type="email" placeholder="safak@gmail.com" />
          <label>password </label>
          <input type="password" />
          <button className="setting-submit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Setting;
