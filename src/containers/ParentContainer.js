import React from 'react';
import ParentCounter from '../views/ParentCounter/index';
import CounterContainer from './CounterContainer';
import Menu from '../views/Menu/index';

class ParentContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 1, arr: [0], action: "none" };

        this.add = this.add.bind(this);
        this.delete = this.delete.bind(this);
        this.reset = this.reset.bind(this);
    }
    add() {
        let arr = this.state.arr;
        arr.push(this.state.count);
        this.setState({ count: this.state.count + 1, arr: arr, action: "add" });
    }
    delete() {
        if (this.state.count > 1) {
            let arr = this.state.arr;
            arr.splice(arr.length - 1);
            this.setState({ count: this.state.count - 1, arr: arr, action: "delete" });
        }
    }
    reset() {
        this.setState({ count: 1, arr: [0], action: "reset" });
    }
    UNSAFE_componentWillReceiveProps(prop) {
        console.log("Parent: UNSAFE_componentWillReceiveProps");
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
    render() {
        console.log("Parent: render");
        return <div>
            <Menu counters={true}/>
            <ParentCounter add={this.add}
                del={this.delete}
                reset={this.reset} />
            {
                this.state.arr.map((item) => { return <CounterContainer key={item} action={this.state.action} /> })
            }
        </div>
    }
}
export default ParentContainer;