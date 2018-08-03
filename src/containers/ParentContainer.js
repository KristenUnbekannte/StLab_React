import React from 'react';
import Layout from '../common/Layout';
import ParentCounter from '../views/ParentCounter';
import CounterContainer from './CounterContainer';

class ParentContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { counter: 1, action: 'none' };

		this.onClickAddCounter = this.onClickAddCounter.bind(this);
		this.onClickDeleteCounter = this.onClickDeleteCounter.bind(this);
		this.onClickResetCounter = this.onClickResetCounter.bind(this);
	}
	onClickAddCounter() {
		this.setState({ counter: this.state.counter + 1, action: 'addCounter' });
	}
	onClickDeleteCounter() {
		const counter = this.state.counter;
		if (counter > 1) {
			this.setState({ counter: counter - 1, action: 'deleteCounter' });
		}
	}
	onClickResetCounter() {
		this.setState({ counter: 1, action: 'resetCounter' });
	}
	componentDidMount() {
		console.log('Parent: componentDidMount');
	}
	componentWillUnmount() {
		console.log('Parent: componentWillUnmount');
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('Parent: shouldComponentUpdate');
		return true;
	}
	componentDidUpdate() {
		console.log('Parent: componentDidUpdate');
	}
	static getDerivedStateFromProps() {
		console.log('Parent: getDerivedStateFromProps');
		return null;
	}
	getSnapshotBeforeUpdate() {
		console.log('Parent: getSnapshotBeforeUpdate');
		return null;
	}
	render() {
		console.log('Parent: render');
		return (
			<Layout>
				<div>
					<ParentCounter
						onClickAddCounter={this.onClickAddCounter}
						onClickResetCounter={this.onClickResetCounter}
						onClickDeleteCounter={this.onClickDeleteCounter}
					/>
					{[...Array(this.state.counter)].map((item, i) => {
						return <CounterContainer key={i} action={this.state.action} />;
					})}
				</div>
			</Layout>
		);
	}
}
export default ParentContainer;
