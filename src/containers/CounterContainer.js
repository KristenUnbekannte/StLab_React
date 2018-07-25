import React from 'react';
import Counter from '../views/Counter/index';

class CounterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };

        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.reset = this.reset.bind(this);
    }
    increase() {
        this.setState({ count: this.state.count + 1 });
    }
    decrease() {
        this.setState({ count: this.state.count - 1 });
    }
    reset() {
        this.setState({ count: 0 });
    }

    UNSAFE_componentWillReceiveProps(prop) {
        console.log("Child: UNSAFE_componentWillReceiveProps");
        let counter = this.state.count;
        if (prop.action === "delete" && counter % 2 !== 0) {
            this.setState({ count: --counter });
        }
        else if (prop.action === "add" && counter % 2 === 0) {
            this.setState({ count: ++counter });
        }
        else if (prop.action === "reset") {
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
        }
        else {
            return false;
        }
    }
    componentDidUpdate() {
        console.log("Child: componentDidUpdate");
    }
    render() {
        console.log("Child: render");
        return <Counter increase={this.increase}
            decrease={this.decrease}
            reset={this.reset}
            count={this.state.count} />
    }
}
export default CounterContainer;