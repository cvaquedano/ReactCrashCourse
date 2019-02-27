import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 1,
    tags: ["Tag1","Tag2"]
  };

  renderTags() {
      if(this.state.tags.length===0) return <p>No tagas</p>;
    return this.state.tags.map(tag => <li key={tag}>{tag}</li>);
  }
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.length === 0 && "Please create a new tag!"}
          {this.renderTags()}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge  m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
