import React from 'react';

import { Statistics } from './Statistics/Statistics'
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions'
import { Notification } from './Notification'

export class App extends React.Component  {
state = { 
  good: 0,  
  neutral: 0,
  bad: 0,
}
 
  countPositiveFeedbackPercentage() {
    return Math.floor(this.state.good / (this.state.good + this.state.neutral + this.state.bad) * 100)
  }
  countTotalFeedback(){
    return this.state.good + this.state.neutral + this.state.bad
  }
  onLeaveFeedback = opt => {
    this.setState(prevState => ({ [opt]: prevState[opt] + 1 }));
  };
  

  
  render() {
    if (this.state.good > 0 || this.state.neutral > 0 || this.state.bad > 0) {
      return (
        <>
        <FeedbackOptions options={['good', 'neutral', 'bad']}
                         onHandleClick={this.onLeaveFeedback} />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        /> 
    </>
    )
    } else {
      return (
          <>
          <FeedbackOptions options={['good', 'neutral', 'bad']}
            onHandleClick={this.onLeaveFeedback} />
          <Notification message={'There is no feedback'}></Notification>            
          </>

      )

    }
  }
 
};
