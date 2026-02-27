import "./DropMenu.scss";
import { useState, useEffect, useRef } from "react";

export default ({ children, ...props }) => {
  var [opened, setOpened] = useState(false);

  const ref = useRef(null);

  const handleClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  });

  const classes = `${props.className} context-button`;
  return (
    <button ref={ref} className={classes} onClick={() => setOpened(!opened)}>
      {opened && <div className="context-menu">{children}</div>}
    </button>
  );
};
