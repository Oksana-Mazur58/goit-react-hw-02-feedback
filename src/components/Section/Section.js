import React from "react";
import PropTypes from 'prop-types';
import './Section.css'


const Section = ({ title, children }) => {
    return (
        <div className="Section">
            <h2>{title}</h2>
            {children}
        </div>
    )


}
Section.propTypes = {
    title: PropTypes.string.isRequired
};
export default Section