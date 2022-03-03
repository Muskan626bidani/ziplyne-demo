import React from 'react';
import './Testi_card.css';
export default function Testi_card(props) {
  return(
  <>
  <div className="testi_card">
 <div className="testi">
              <img
                src={props.img}
                alt="First slide"
              />
              <div className="testi-text">
                <h5>{props.title}</h5>
                <p> {props.desc}</p>
                <h2> {props.review}
                </h2>
                <h4> {props.q1}
                  </h4>
                <p>
                {props.a1}
                </p>
                <h4>{props.q2}
                  </h4>
                <p>
                {props.a2}
                </p>
              </div>

  </div>
  </div></> );
}