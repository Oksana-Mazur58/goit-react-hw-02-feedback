import React from "react";
import PropTypes from 'prop-types';


const Notification = ({ message }) => {
    return (
        <p>{message}</p>
    )
}
Notification.defaultProps = {
    message: "No feedback given"
};
export default Notification