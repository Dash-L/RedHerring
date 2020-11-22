import React from "react";
import axios from "axios";

class Results extends React.Component {
  //Resets app state
  onRestartClick = async () => {
    const response = await axios.get("https://redherringserver.dashl.repl.co/");

    this.props.changeHeadlines(response.data.headlines);
    this.props.changeScore(0);
    this.props.changeSubmitted();
  }

  render() {
    return (
      <div id="results">
        <div className="content">
          Your score is {this.props.score}
        </div>
        <button onClick={() => this.onRestartClick()} className="ui blue button">
          Play Again?
        </button>
      </div>
    )
  }
};

export default Results;