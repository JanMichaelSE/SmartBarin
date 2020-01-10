import React, { Fragment } from "react";
import "./ImageForm.css";

const ImageForm = ({ onInputChange, onPictureSubmit }) => {
  return (
    <Fragment>
      <div>
        <p className="f3 center">
          {`This Magic Brain will detect faces in your pictures. Give it a Try`}
        </p>
        <div className="center">
          <div className=" form pa4 br3 shadow-5 center">
            <input
              className="f4 pa2 w-70 center"
              type="text"
              onChange={onInputChange}
            />
            <button
              className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
              onClick={onPictureSubmit}
            >
              Detect
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ImageForm;
