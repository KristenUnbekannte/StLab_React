import React from 'react';
import ParentCounter from '../views/ParentCounter';
import CounterContainer from './CounterContainer';
import Menu from '../containers/MenuContainer';

class ParentContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { arr: [0], action: "none" };

        this.onClickAddCounter = this.onClickAddCounter.bind(this);
        this.onClickDeleteCounter = this.onClickDeleteCounter.bind(this);
        this.onClickResetCounter = this.onClickResetCounter.bind(this);
    }
    onClickAddCounter() {
        let arr = this.state.arr;
        arr.push(arr.length);
        this.setState({ arr, action: "addCounter" });
    }
    onClickDeleteCounter() {
        if (this.state.arr.length > 1) {
            let arr = this.state.arr;
            arr.pop();
            this.setState({ arr, action: "deleteCounter" });
        }
    }
    onClickResetCounter() {
        this.setState({ arr: [0], action: "resetCounter" });
    }
    componentDidMount() {
        console.log("Parent: componentDidMount");
    }
    componentWillUnmount() {
        console.log("Parent: componentWillUnmount");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Parent: shouldComponentUpdate");
        return true;
    }
    componentDidUpdate() {
        console.log("Parent: componentDidUpdate");
    }
    static getDerivedStateFromProps() {
        console.log("Parent: getDerivedStateFromProps");
        return null;
    }
    getSnapshotBeforeUpdate() {
        console.log("Parent: getSnapshotBeforeUpdate");
        return null;
    }
    render() {
        console.log("Parent: render");
        return (
            <div>
                <Menu />
                <ParentCounter onClickAddCounter={this.onClickAddCounter}
                    onClickResetCounter={this.onClickResetCounter}
                    onClickDeleteCounter={this.onClickDeleteCounter} />
                {
                    this.state.arr.map((item) => { return <CounterContainer key={item} action={this.state.action} /> })
                }
            </div>
        );
    }
}
export default ParentContainer;