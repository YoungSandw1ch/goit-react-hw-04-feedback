import PropTypes from 'prop-types';
import { Box } from 'components/Common';
import { Button, Good, Bad, Neutral } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsNames = Object.keys(options);
  const handleFeedback = e => onLeaveFeedback(e.currentTarget.name);
  const icons = [<Good />, <Neutral />, <Bad />];

  return (
    <Box display="flex" justifyContent="center" gridGap={6}>
      {optionsNames.map((option, ind) => (
        <Button
          type="button"
          name={option}
          key={option}
          onClick={handleFeedback}
        >
          {icons[ind]}
        </Button>
      ))}
    </Box>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
