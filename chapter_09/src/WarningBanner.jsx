import React from "react";

function WarningBanner(props) {
  if (props.warning) {
    return null;
  }
  return (
    <div style={{color : 'red'}}> 경고!!</div>
  );
}
export default WarningBanner;