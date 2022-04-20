import css from "./css";
import "./Modal.css";

// ==============================================

export default function Modal({ show, setShow }) {
  // --------------------------------------------

  const classes = css(["modal", show ? "open" : "closed"]);

  // --------------------------------------------

  return (
    <div className={classes}>
      <button onClick={() => setShow(false)}>Close</button>
    </div>
  );

  // --------------------------------------------
}
