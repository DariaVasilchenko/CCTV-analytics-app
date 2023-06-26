import React from "react";
import "./loader.css";

interface Props {
    children: string;
}

const Loader: React.FC<Props> = (props) => {
    return (
      <div className="wrapper" {...props}>
        <div className="spinner"></div>
        <p>{props.children}</p>
      </div>
    );
  };

export default Loader;
