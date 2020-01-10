import React, { Fragment } from "react";

const Rank = ({ name, entries }) => {
  return (
    <Fragment>
      <div className="center white f3">{`${name} your total entries...`}</div>
      <div className="center white f2">{`${entries}`}</div>
    </Fragment>
  );
};

export default Rank;
