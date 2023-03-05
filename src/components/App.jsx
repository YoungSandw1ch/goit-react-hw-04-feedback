import React, { useReducer } from 'react';
import { Box } from './Common';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';
import { reducer } from 'utils';
import { initialState } from 'constants';

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  const countPositiveFeedbackPercentage = ({ good }, total) => {
    if (!total) return 0;
    return good * Math.round(100 / total);
  };

  const leaveFeedback = name => {
    dispatch({ type: name });
  };

  const total = countTotalFeedback(state);
  const positivePercentage = countPositiveFeedbackPercentage(state, total);
  const { good, neutral, bad } = state;

  return (
    <Box width="container" mx="auto" py={5} px={4}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={state} onLeaveFeedback={leaveFeedback} />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Box>
  );
};
