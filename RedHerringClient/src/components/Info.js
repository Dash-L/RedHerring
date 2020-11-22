import React from "react";
import {Link} from "react-router-dom";

class Info extends React.Component {
  render() {
    return (
      <div id="info">
        <Link to="/" className="ui white button">
          <i className="left chevron icon" />
          Back
        </Link>

        <div>
          <h1 className="header"> Misinformation </h1>
          <p>Misinformation is false or inaccurate information that is usually intended to deceive, although it may be unintentional as well. This can be found in many places, from video games, to relationships, to even the news and media. </p>
          <h2 className="header"> Misinformation vs Disinformation: </h2>
          <p>Disinformation is more propaganda than anything else. It is typically used by the government or for militia purposes. Disinformation is a weaponized version of misinformation. </p>
          <h2 className="header"> About this project: </h2>
          <p>The purpose of this project is to show how easily misinformation can be spread; one could easily fall for a false narrative. </p>
        </div>
      </div>
    )
  }
};

export default Info;