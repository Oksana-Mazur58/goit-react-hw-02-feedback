import React from "react";
import PropTypes from 'prop-types';


const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
    return (
        <div>
            <h2>Statistics</h2>
            <p>Good:{good}</p>
            <p>Neutral:{neutral}</p>
            <p>Bad:{bad}</p>
            <p>Total:{total}</p>
            <p>Positive feedback: {positiveFeedback} %</p>
        </div>

    )
}
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
    positiveFeedback: PropTypes.func.isRequired,
};
export default Statistics