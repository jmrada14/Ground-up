import React from "react";

function dropDown() {
  return (
    <div className="input-field col s12">
      <select className="browser-default">
        <option value="" disabled selected>
          {" "}
          Search Members{" "}
        </option>
        <option value="1">All members</option>
        <option value="2">Members by chamber</option>
        <option value="3">Members by state</option>
      </select>
    </div>
  );
}

export default dropDown;
