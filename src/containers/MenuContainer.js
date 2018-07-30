import React from 'react';
import Menu from '../views/Menu';

class MenuContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            urls: ["#/about", "#/counters", "#/login", "#/login-redux"]
        };
    }
    render() {
        return (
            <Menu urls={this.state.urls} />
        );
    }
}
export default MenuContainer;