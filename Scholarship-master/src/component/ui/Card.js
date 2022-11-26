import "./Card.css";
import React from "react";
const Card = (props) => {
  {
    console.log(props);
  }
  return (
    <>
      {props.something.map((some) => (
        <div>
          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title title">{some.name}</h5>
                  <p className="card-text about">{some.about}</p>
                  <p className="Eligibility">{some.eligibility}</p>
                  <p className="deadline">{some.deadline}</p>

                  <a href={`${some.link}`} className="btn btn-primary">
                    Apply Here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
