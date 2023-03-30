import React, { useEffect, useState } from "react";
import { problems, reasons } from "../../constants/index";
import { IoClose } from "react-icons/io5";

const Modal = (props) => {
  return (
    <div
      onClick={() => props.setModalIsOpen(false)}
      style={{
        position: "fixed",
        background: "rgba(0,0,0,0.6)",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 100,

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(5px)",
      }}
    >
      <div onClick={(e) => e.stopPropagation()} className="popup-content">
        <div className="popup-content-inner">
          <div className="popup-image">
            <img src={props.data.img} />
          </div>
          <div className="popup-right">
            <div className="popup-heading">{props.data.title}</div>
            <div className="popup-description">{props.data.details1}</div>
          </div>
          <IoClose className="popup-close-button" onClick={() => props.setModalIsOpen(false)}/>
        </div>
      </div>
    </div>
  );
};

export default Modal;
