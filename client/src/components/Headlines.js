import React from "react";

class Headlines extends React.Component {
  renderHeadlines = () => {
    return this.props.headlines.map(headline => {
      //Adds styling to selected headlines
      const selected = this.props.selected.map(item => item.content).includes(headline.content) ? "selected" : "";

      //Adds color styles to headlines when displaying results
      let truth;
      if(this.props.submitted){
        truth = this.props.submitted && headline.real ? "real" : "fake"; 
      }
      
      //Renders each individual headline card
      return (
        <div className={`${selected} ${truth} card`} onClick={() => this.props.onHeadlineClick(headline)} key={headline.content}>
          <div className="content">
            <span className="capitalize"> 
              {headline.content.substring(0, 1)}
            </span>{headline.content.substring(1)}
          </div>
        </div>
      )
    })
  };

  render() {
    return (
      <div className="ui cards">
        {this.renderHeadlines()}
      </div>
    );
  }
};

export default Headlines;