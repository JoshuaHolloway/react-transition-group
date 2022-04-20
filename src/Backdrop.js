import css from "./css";
import "./Backdrop.css";

// ==============================================

export default function Backdrop({ show }) {
  // --------------------------------------------

  const classes = css(["backdrop", show ? "open" : "closed"]);

  // --------------------------------------------

  return <div className={classes}></div>;

  // --------------------------------------------
}
