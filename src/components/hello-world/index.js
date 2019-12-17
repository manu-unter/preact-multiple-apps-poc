import { h, Component } from "preact";
import styles from "./style.scss";

export default class App extends Component {
  render(props) {
    return (
      <div className={styles.overlay}>
        <h1 style={{ color: props.color }}>I am an overlay rendered by a completely separate preact app</h1>
      </div>
    );
  }
}
