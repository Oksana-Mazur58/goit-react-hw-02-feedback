import React, { Component } from "react";
import PropTypes from 'prop-types';

import FeedbackOption from './components/FeedbackOptions';
import Statistics from './components/Statistics'
import Notification from './components/Notification'
import Section from './components/Section'

class App extends Component {
    static defaultProps = {
        good: 0,
        neutral: 0,
        bad: 0,
    };
    static propTypes = {
        good: PropTypes.number,
        neutral: PropTypes.number,
        bad: PropTypes.number,

    };
    state = {
        good: 0,
        neutral: 0,
        bad: 0,

    }
    incrementValue = (value) => {
        this.setState(prevState => {
            return { [value]: prevState[value] + 1 }
        })
    };

    // addFeedback = (name) => () => {
    //     this.setState({ [name]: this.state[name] + 1 })
    // }

    totalFeedback() {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad

    }
    countPositiveFeedbackPercentage() {
        const { good } = this.state;
        return Math.round((good / this.totalFeedback()) * 100);
    };


    render() {
        const { good, neutral, bad } = this.state;
        const total = this.totalFeedback();
        const positiveFeedback = this.countPositiveFeedbackPercentage();
        const keys = Object.keys(this.state);
        return (
            <Section title={"Please leave feedback"}>
                <FeedbackOption onIncrement={this.incrementValue}
                    options={keys} />

                {
                    total ? (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={total}
                            positiveFeedback={positiveFeedback}
                        />
                    ) : (
                            <Notification
                                message="No feedback given"
                            />
                        )
                }
            </Section>

        )

    }
}
export default App

