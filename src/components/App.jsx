import React, { useState } from 'react';

import { Statistics } from './Statistics/Statistics'
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions'
import { Notification } from './Notification'

export function App() {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
 
  function countPositiveFeedbackPercentage() {
    return Math.floor(good / (good + neutral + bad) * 100)
  }
  function countTotalFeedback(){
    return good + neutral + bad
  }
  function onLeaveFeedback (opt) {

    switch(opt) {
    
    case 'good':  
    setGood(s => s + 1)
        break
      
    case 'neutral':
     setNeutral(s => s + 1)
        break
      
    case 'bad':
    setBad(s => s + 1)
        break
      
      default:
         throw new Error('something went wrong');
      

}
  };
 
  

  return (
    <>
        <FeedbackOptions options={['good', 'neutral', 'bad']}
        onHandleClick={onLeaveFeedback} />
        {countTotalFeedback() === 0 && <Notification message='There is no feedback'/>} 
        {countTotalFeedback() > 0 && <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />}
         
    </>
)
 
};
