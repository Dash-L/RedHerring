import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Headlines from "./Headlines";
import Results from "./Results";

class Game extends React.Component {
  //Initializes component state
  state = {headlines: [], score: 0, selected: [], submitted: false}

  //Fetches headlines
  async componentDidMount() {
    const response = await axios.get("https://redherringserver.dashl.repl.co/");
    this.setState({headlines: response.data.headlines});
  }

  onSubmitClick = (headline) => {
    //Calculates score
    let newScore = this.state.score;
    for(const item of this.state.selected) {
      if(item.real) {
        newScore++;
      } else {
        newScore--;
      };
    };
    
    //Gets state ready to display results
    this.setState({
      selected: [],
      score: newScore,
      submitted: true
    });
  }

  onHeadlineClick = (headline) => {
    //Prevents selection while displaying results
    if(this.state.submitted) {
      return;
      //Adds or removes clicked headlines to 'selected' array depending on if it is already included
    } else if(this.state.selected.map(item => item.content).includes(headline.content)) {
      this.setState({selected: [...this.state.selected.filter(item => item.content !== headline.content)]})
    } else {
      this.setState({selected: [...this.state.selected, headline]});
    };
  };

  render() {
    return (
      <div>
        <div className="ui segment" id="header">
          <Link to="/info"><i className="question circle icon" /></Link>
          <h1 className="header">Red Herring</h1>
          <h3>Click all the fake headlines</h3>
        </div>

        <div id="game">
          {this.state.submitted &&
            <Results
              score={this.state.score}
              changeHeadlines={(newHeadlines) => this.setState({headlines: newHeadlines})}
              changeScore={(newScore) => 
              this.setState({score: newScore})}
              changeSubmitted={() => this.setState({submitted: false})}
            />
          }

          {!this.state.submitted &&
            <button onClick={() => this.onSubmitClick()} className="ui large blue button">
              Finish
            </button>
          }

          <Headlines
            headlines={this.state.headlines}
            selected={this.state.selected}
            submitted={this.state.submitted}
            onHeadlineClick={this.onHeadlineClick}
          />
        </div>
      </div>
    );
  }
};

export default Game;