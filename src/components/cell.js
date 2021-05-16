import React from "react";
import { Button, TableCell } from "grommet";

export default class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      disabled: false,
    };
  }

  handleClick = () => {
    this.setState({
      content: this.props.shape,
      disabled: true,
    });
    this.props.onPress(this.props.row, this.props.cell);
  };

  render() {
    return (
      <TableCell border="all">
        {this.state.disabled ? (
          this.state.content === "cross" ? (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/OOjs_UI_icon_close.svg/1200px-OOjs_UI_icon_close.svg.png"
              alt="cross"
            />
          ) : (
            <img
              src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/shape_circle.png"
              alt="circle"
            />
          )
        ) : (
          <Button color="white" onClick={this.handleClick}></Button>
        )}
      </TableCell>
    );
  }
}
