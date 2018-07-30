import React from 'react';
import Counter from '../views/Counter';

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

    render() {
        return <Counter onClickIncreaseCount={this.onClickIncreaseCount}
            onClickDecreaseCount={this.onClickDecreaseCount}
            onClickResetCount={this.onClickResetCount}
            count={this.state.count} />
    }
}
export default CounterContainer;