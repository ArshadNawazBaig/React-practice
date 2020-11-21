import React from "react";

const getSeason = (lat, month) => {
  if (lat > 0) {
    return month > 2 && month < 9 ? "Summer" : "Winter";
  } else {
    return month > 2 && month < 9 ? "Winter" : "Summer";
  }
};
const SeasonDisplay = (props) => {
  console.log(props, "props");
  const { lat } = props;
  const currentDate = new Date().getMonth();
  return <div>User Current Season is {getSeason(lat, currentDate)}</div>;
};

export default SeasonDisplay;
