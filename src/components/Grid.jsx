import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: pink;
`;

class Grid extends React.Component {
  state = {
    grid: ['', '', '', '', '', '', '', '', ''],
    turn: true,
    class: [
      'empty',
      'empty',
      'empty',
      'empty',
      'empty',
      'empty',
      'empty',
      'empty',
      'empty',
    ],
    winningCombos: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ],
    winner: false,
  };

  takeTurn(index) {
    if (!this.state.winner) {
      this.setState((currState) => {
        if (currState.grid[index] === '') {
          const newGrid = [...currState.grid];
          let newClass = [...currState.class];
          newGrid[index] = currState.turn ? 'X' : 'O';
          newClass[index] = 'filled';
          const isWinner = this.checkWinner(newGrid, index);

          if (isWinner)
            newClass = currState.class.map(() => {
              return 'filled';
            });
          return {
            grid: newGrid,
            turn: !currState.turn,
            class: newClass,
            winner: isWinner,
          };
        }
      });
    }
  }

  checkWinner(newGrid, index) {
    const combosWithIndex = this.state.winningCombos.filter((combo) => {
      return combo.includes(index);
    });
    const isWinner = combosWithIndex.filter((combo) => {
      return (
        newGrid[combo[0]] === newGrid[combo[1]] &&
        newGrid[combo[1]] === newGrid[combo[2]]
      );
    });
    return isWinner.length !== 0;
  }

  resetGame() {
    this.setState({
      grid: ['', '', '', '', '', '', '', '', ''],
      turn: true,
      class: [
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
      ],
      winningCombos: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ],
      winner: false,
    });
  }

  render() {
    return (
      <div>
        <div id="grid-container">
          <div id="grid">
            {this.state.grid.map((item, index) => {
              return (
                <div
                  id={index}
                  class={`square ${this.state.class[index]}`}
                  onClick={() => this.takeTurn(index)}
                >
                  <p>{this.state.grid[index]}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div id="winnerPopup">
          {this.state.winner ? (
            <>
              <p class="winner">
                {this.state.turn ? 'Noughts' : 'Crosses'} has won!
              </p>
              <Button onClick={() => this.resetGame()}>play again</Button>
            </>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    );
  }
}
export default Grid;
