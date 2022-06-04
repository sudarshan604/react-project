import "./SinglePost.css";
function SinglePost() {
  return (
    <div className="single-post">
      <div className="single-post-wrapper"></div>
      <img
        className="single-post-image"
        src="https://source.unsplash.com/random"
        alt="image"
      />
      <h1 className="single-post-title">
        lorem lasds asldksa sad.
        <div className="post-edit">
          <i className="single-post-icon fa-solid fa-pen-to-square"></i>
          <i className="single-post-icon fa-solid fa-trash-can"></i>
        </div>
      </h1>
      <div className="single-post-info">
        <span className="single-post-author">
          Author<b>safak</b>
        </span>
        <span className="single-post-date">1 hour ago</span>
      </div>
      <p className="single-post-description">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi, id est
        laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
        distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
        cumque nihil impedit quo minus id quod maxime placeat facere possimus,
        omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem
        quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet
        ut et voluptates repudiandae sint et molestiae non recusandae. Itaque
        earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
        voluptatibus maiores alias consequatur aut
      </p>
    </div>
  );
}

export default SinglePost;
