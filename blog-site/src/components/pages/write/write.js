import "./write.css";
function Write() {
  return (
    <div className="write">
      <img
        className="write-image"
        src="https://source.unsplash.com/random"
        alt="randomimage"
      />

      <form className="write-form">
        <div className="write-form-group">
          <label for="file-input">
            <i class="write-icon fa-solid fa-plus"></i>
          </label>

          <input type="file" id="file-input" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="title"
            className="write-input"
            autoFocus={true}
          />
        </div>
        <div className="write-form-group">
          <textarea
            placeholder="tell your story ..."
            type="text"
            className="write-input write-text"
          ></textarea>
        </div>
        <button className="write-submit">submit</button>
      </form>
    </div>
  );
}

export default Write;
