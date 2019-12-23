import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Annotations from "../Annotations";

/**
 * Displays the component
 */
const All = props => {
  return (
    <div className="All">
      <h1>All demos</h1>
      <ul>
        <li>
          <Annotations />
        </li>
      </ul>
    </div>
  );
};

export default All;
