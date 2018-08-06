import React from "react";
import PropTypes from "prop-types";
import Counter from "../views/Counter";

class CounterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    this.onClickIncreaseCount = this.onClickIncreaseCount.bind(this);
    this.onClickDecreaseCount = this.onClickDecreaseCount.bind(this);
    this.onClickResetCount = this.onClickResetCount.bind(this);
  }
  onClickIncreaseCount() {
    this.setState({ count: this.state.count + 1 });
  }
  onClickDecreaseCount() {
    this.setState({ count: this.state.count - 1 });
  }
  onClickResetCount() {
    this.setState({ count: 0 });
  }

  UNSAFE_componentWillReceiveProps(prop) {
    console.log("Child: UNSAFE_componentWillReceiveProps");

    let counter = this.state.count;
    if (prop.action === "deleteCounter" && counter % 2 !== 0) {
      this.setState({ count: --counter });
    } else if (prop.action === "addCounter" && counter % 2 === 0) {
      this.setState({ count: ++counter });
    } else if (prop.action === "resetCounter") {
      this.setState({ count: 0 });
    }
  }
  componentDidMount() {
    console.log("Child: componentDidMount");
  }
  componentWillUnmount() {
    console.log("Child: componentWillUnmount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Child: shouldComponentUpdate");

    if (this.state.count !== nextState.count) {
      return true;
    } else {
      return false;
    }
  }
  componentDidUpdate() {
    console.log("Child: componentDidUpdate");
  }
  render() {
    console.log("Child: render");
    return (
      <Counter
        onClickIncreaseCount={this.onClickIncreaseCount}
        onClickDecreaseCount={this.onClickDecreaseCount}
        onClickResetCount={this.onClickResetCount}
        count={this.state.count}
      />
    );
  }
}

CounterContainer.propTypes = {
  action: PropTypes.string.isRequired
};

export default CounterContainer;
