import React from "react";
import Popup from "reactjs-popup";
import "./PopUp.css";

export default function PopUpComponent({ resetValues, oScore, xScore }) {
  return (
    <Popup
      trigger={<button className="button"> Open Modal </button>}
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <div className="header"> Modal Title </div>
          <div className="content">
            <p>Player X Wins: {xScore}</p>
            <p>Player O Wins: {oScore}</p>
          </div>
          <div className="actions">
            <button
              className="button"
              onClick={() => {
                resetValues();
                close();
              }}
            >
              Play again?
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
}
