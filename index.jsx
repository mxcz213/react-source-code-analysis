debugger
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Page extends Component {
    render() {
        return (
            <span>hello react</span>
        );
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('page')
);