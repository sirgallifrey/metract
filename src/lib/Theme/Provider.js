import React from 'react';

export default class Provider extends React.Component{

    constructor(...args) {

        super(...args);
        this.theme = this.props.theme;
    }

    getChildContext() {

        return {
            MetractTheme: this.theme
        };
    }

    render() {
        return this.props.children;
    }
};

Provider.childContextTypes = {
    MetractTheme: React.PropTypes.object
};