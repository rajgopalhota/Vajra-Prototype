import React from "react";
import BankImg from "./../assets/images/home.png";
import TextAni from "./TextAni";

export default function Home() {
  return (
    <>
      <div className="row h-100">
        <div
          className="col-lg-6 col-sm-12 d-flex align-items-center justify-content-center"
          style={{ backgroundColor: "lavender" }}
        >
          <div
            className="homeinfo text-center"
          >
            <h2>
              Welcome to Vajra <TextAni />
            </h2>
            <img src={BankImg} alt="" className="img-fluid mb-3 floating" />
            <p>
              Our bank is committed to providing you with the best banking
              services. We have branches in over 100 cities across India and
              have been awarded "Best Bank htmlFor Customer Service" in 2023.
            </p>
          </div>
        </div>
        <div
          className="col-lg-6 col-sm-12 homeright"
          style={{ backgroundColor: "lavenderblush" }}
        >
          <div className="glass-card p-4 m-2">
            <h3>#1</h3>
            <p>Instant Personal Loans at your demand!</p>
          </div>
          <div className="glass-card p-4 m-2">
            <h3>#2</h3>
            <p>Home loans according to RBI guidlines.</p>
          </div>

          <div className="glass-card p-4 m-2">
            <h3>#3</h3>
            <p>Health insurances at lower prices.</p>
          </div>
          <div className="glass-card p-4 m-2">
            <h3>#4</h3>
            <p>Car loans at cheaper interests!.</p>
          </div>
          <div className="glass-card p-4 m-2">
            <h3>#5</h3>
            <p>Faster payments, low processing!</p>
          </div>
        </div>
      </div>
    </>
  );
}
