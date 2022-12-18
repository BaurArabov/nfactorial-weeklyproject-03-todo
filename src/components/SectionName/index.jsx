import { useState } from "react";

import React from "react";

export default function SectionName(props) {
  return (
    <div className="SectionName" style={{ paddingBottom: "50px" }}>
      <h2 style={{ paddingBottom: "0.7rem" }}>{props.name}</h2>
      <hr />
    </div>
  );
}
