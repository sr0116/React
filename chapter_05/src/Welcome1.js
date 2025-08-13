import React from "react";
import {render} from "@testing-library/react";


class  Welcome1 extends React.Component {
 render() {
  return(<h1>안녕!! {this.props.name}</h1>) ; // props만 사용해야 함
  }
}
export default Welcome1;