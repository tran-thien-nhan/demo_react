import React from 'react';

class ClickWithParameter extends React.Component {
    handleClickWithParameter = (param) => {
        alert(param);
    }
    render() {
        const paramValue = "a new capybara";
        return (
            <button onClick={() => this.handleClickWithParameter(paramValue)}>click</button>
        );
    }
}
export default ClickWithParameter;