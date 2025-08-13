import React from "react";
import Notification from "./Notification";
import {render} from "@testing-library/react";


const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid black",
    borderRadius : 16,
  },
  messageText : {
    fontSize: 16,
    color: "black",
  },
};

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render()
  {
    return (
      <div style={styles.wrapper} >
        <span style={styles.messageText}>
      {this.props.message}
        </span>
        </div>
        );
      }
}
export default Notifications;