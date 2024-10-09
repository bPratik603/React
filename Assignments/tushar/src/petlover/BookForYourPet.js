import React from "react";
import { MdOutlineAddHomeWork } from "react-icons/md";

function BookForYourPet() {
  return (
    <div className="m-5">
      <p className="text-success fw-bold mt-5" style={{ fontSize: "20px" }}>
        Going for a Vacations?
      </p>
      <h1 className="h1 fw-bold">
        <span>Book For</span>{" "}
        <span style={{ color: "orangered" }}>Your Pet</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>

      <div className="boarding">
        <div>
          <h2 className="fs-5 px-4">
            <MdOutlineAddHomeWork />
            <span> Pet Boarding</span>
          </h2>
          <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet</p>
        </div>

        <div>
          <h2 className="fs-5 px-4">
            <MdOutlineAddHomeWork />
            <span> Pet Feeding</span>
          </h2>
          <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet</p>
        </div>
        <div>
          <h2 className="fs-5 px-4">
            <MdOutlineAddHomeWork />
            <span> Pet Grooming</span>
          </h2>
          <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet</p>
        </div>
        <div>
          <h2 className="fs-5 px-4">
            <MdOutlineAddHomeWork />
            <span> Pet Tranning</span>
          </h2>
          <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet</p>
        </div>
      </div>
    </div>
  );
}

export default BookForYourPet;
