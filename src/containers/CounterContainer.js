import React from 'react';
import Counter from '../views/Counter/index';
import App from '../App';

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

    render() {
        return <div>
            <App /><Counter increase={this.increase}
                decrease={this.decrease}
                reset={this.reset}
                count={this.state.count} />
        </div>
    }
}
export default CounterContainer;