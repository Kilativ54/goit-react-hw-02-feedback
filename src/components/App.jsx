import React, { Component } from 'react';
import { Container } from './App.styled';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notifications/Notifications';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = option => {
    const rating = option.target.name;
    this.setState(state => ({ [rating]: state[rating] + 1 }))
    
    
  };

  totalFeedback = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  positivePercentage = () => {
    if (this.totalFeedback() === 0) {
      return 0;
    }
    return Math.round((this.state.good / this.totalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    return (
         <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleFeedback}
          />{' '}
        </Section>
        <Section title="Statistics">
          {this.totalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.totalFeedback()}
              positivePercentage={this.positivePercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </Container>
    );
  }
}
