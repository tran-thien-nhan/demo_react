import React from 'react';

class DateTimeClick extends React.Component {
    handleDateTimeClick = () => {
        const currentDateTime = new Date().toLocaleString();
        alert(currentDateTime);
    }
    render() {
        return (
            <button onClick={() => this.handleDateTimeClick()}>click datetime</button>
        );
    }
}

export default DateTimeClick;