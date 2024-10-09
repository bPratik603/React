import React from "react";
import Team_Card from "./Team_Card";

function Team() {
  return (
    <div className="bg-light pb-5">
      <p
        className="pt-5 text-success fw-bold text-center"
        style={{ fontSize: "20px" }}
      >
        Team Member
      </p>
      <h1 className="h1 fw-bold text-center">
        <span style={{ color: "black" }}>Meet Out</span>{" "}
        <span style={{ color: "orangered" }}>Team Member</span>
      </h1>
      <Team_Card />
    </div>
  );
}

export default Team;
