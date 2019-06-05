import React, { Component } from "react";

class Search extends Component {
  render() {
    return this.props.userGames.map((game, i) => {
      console.log(this.props.userGames, "this.props.userGames");
      return (
        <li key={i}>
          <span className="gameName">{game.name}</span>
          <br />
          <span>
            <img src={this.imageHandler(game.box_art_url)} />
          </span>
          <br />
          <button
            onClick={() => {
              this.props.deleteGame(i);
            }}
            className="removeBtn"
          >
            Remove Game
          </button>
        </li>
      );
    });
  }
}

export default Search;
