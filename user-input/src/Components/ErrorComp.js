import Card from "./Card";
import Button from "./Button";
import "../style.css";
function Error(props) {
  return (
    <div className="error" onClick={props.onClick}>
      <Card className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <main>
          <p>{props.message}</p>
        </main>

        <footer>
          <Button onClick={props.onClick} className="btn">
            ok
          </Button>
        </footer>
      </Card>
    </div>
  );
}

export default Error;
