import "./App.css";
import React from "react";
import { Grommet, Table, TableBody, TableRow } from "grommet";
import Cell from "./components/cell";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

class App extends React.Component {
  cells = ["1", "2", "3"];

  constructor(props) {
    super(props);
    this.state = {
      shape: "cross",
      coorCross: [],
      coorCircle: [],
    };
  }

  checkWin(coors, player) {
    let win_cond = {
      horizontal: [
        [
          [1, 1],
          [1, 2],
          [1, 3],
        ],
        [
          [2, 1],
          [2, 2],
          [2, 3],
        ],
        [
          [3, 1],
          [3, 2],
          [3, 3],
        ],
      ],
      vertical: [
        [
          [1, 1],
          [2, 1],
          [3, 1],
        ],
        [
          [1, 2],
          [2, 2],
          [3, 2],
        ],
        [
          [1, 3],
          [2, 3],
          [3, 3],
        ],
      ],
      diagonal: [
        [
          [1, 1],
          [2, 2],
          [3, 3],
        ],
        [
          [1, 3],
          [2, 2],
          [3, 1],
        ],
      ],
    };
    let count = 0;
    win_cond.horizontal.forEach((variant) => {
      variant.forEach((item) => {
        coors.forEach((coor) => {
          if (coor[0] === item[0] && coor[1] === item[1]) {
            count++;
          }
        });
      });
      if (count === 3) {
        alert("Игрок " + player + " выиграл!!!");
        this.dropStates();
      } else {
        count = 0;
      }
    });
    win_cond.vertical.forEach((variant) => {
      variant.forEach((item) => {
        coors.forEach((coor) => {
          if (coor[0] === item[0] && coor[1] === item[1]) {
            count++;
          }
        });
      });
      if (count === 3) {
        alert("Игрок " + player + " выиграл!!!");
        this.dropStates();
      } else {
        count = 0;
      }
    });
    win_cond.diagonal.forEach((variant) => {
      variant.forEach((item) => {
        coors.forEach((coor) => {
          if (coor[0] === item[0] && coor[1] === item[1]) {
            count++;
          }
        });
      });
      if (count === 3) {
        alert("Игрок " + player + " выиграл!!!");
        this.dropStates();
      } else {
        count = 0;
      }
    });
  }

  handlePress = (row, cell) => {
    let state = this.state;
    if (state.shape === "cross") {
      state.coorCross.push([parseInt(row), parseInt(cell)]);
      state.shape = "circle";
    } else {
      state.coorCircle.push([parseInt(row), parseInt(cell)]);
      state.shape = "cross";
    }
    this.setState(state);
    this.checkWin(this.state.coorCross, 1);
    this.checkWin(this.state.coorCircle, 2);
    if (this.state.coorCross.length + this.state.coorCircle.length === 9) {
      alert("Ничья");
      this.dropStates();
    }
  };

  dropStates() {
    this.setState({
      shape: "cross",
      coorCross: [],
      coorCircle: [],
    });
  }

  render() {
    return (
      <Grommet theme={theme}>
        <Table>
          <TableBody>
            {this.cells.map((row) => {
              return (
                <TableRow key={row}>
                  {this.cells.map((cell) => {
                    return (
                      <Cell
                        key={row + cell}
                        row={row}
                        cell={cell}
                        onPress={this.handlePress}
                        shape={this.state.shape}
                      ></Cell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Grommet>
    );
  }
}

export default App;
