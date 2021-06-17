import React from "react";
import PropTypes from 'prop-types';
import './FeedbackOptions.css'


const FeedbackOption = ({ options, onIncrement }) => {
    return (<div>
        {options.map((option) => (
            <button
                className="Button"
                type="button"
                name={option}
                onClick={() => onIncrement(option)}>
                {option}



            </button>
        ))}
    </div>)
}
FeedbackOption.propTypes = {
    options: PropTypes.object.isRequired,
    onIncrement: PropTypes.func.isRequired
};
export default FeedbackOption