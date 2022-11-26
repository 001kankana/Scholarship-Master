import "./Home.css";
import React, { useState, useEffect } from "react";

import pic1 from "../pics/bg1.svg";
import pic2 from "../pics/bg2.svg";
import pic3 from "../pics/bg3.svg";
import pic4 from "../pics/bg4.svg";
import pic5 from "../pics/bg5.svg";
// import pic6 from '../pics/bg'
// import pic7 from "../pics/14.jpg";
import Card from "../ui/Card";
function Home(props) {
  let scholarshipList = [];
  const [newdata, setnewdata] = useState(scholarshipList);

  useEffect(() => {
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        setnewdata(JSON.parse(this.responseText));
      }
    });

    xhr.open("GET", "https://scholarship-e959.restdb.io/rest/indian");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-apikey", "622ea0dfdced170e8c83a242");
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send(data);
  }, []);

  {
    console.log(newdata);
  }

  return (
    <>
      <div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={pic1} className="d-block w-100" alt="s"></img>
            </div>
            <div className="carousel-item">
              <img src={pic2} className="d-block w-100" alt="s"></img>
            </div>
            <div className="carousel-item">
              <img src={pic3} className="d-block w-100" alt="s"></img>
            </div>
            <div className="carousel-item">
              <img src={pic4} className="d-block w-100" alt="s"></img>
            </div>
            <div className="carousel-item">
              <img src={pic5} className="d-block w-100" alt="s"></img>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div id="header" className="h1">
          SCHOLARSHIPS
        </div>
      </div>
      {newdata && <Card something={newdata} />}
    </>
  );
}

export default Home;
