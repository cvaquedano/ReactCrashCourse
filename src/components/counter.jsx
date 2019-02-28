import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value
    //tags: []
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>No tagas</p>;
    return this.state.tags.map(tag => <li key={tag}>{tag}</li>);
  }
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        {/* <ul>
          {this.state.tags.length === 0 && "Please create a new tag!"}
          {this.renderTags()}
        </ul> */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge  m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
