import PropTypes from 'prop-types';
import { Box } from 'components/Common';
import { Item, MainItem, Span, MainSpan } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Box as="ul" display="flex" flexWrap="wrap" gridColumnGap="15px">
      <Item>
        Good: <Span>{good}</Span>
      </Item>
      <Item>
        Neutral: <Span>{neutral}</Span>
      </Item>
      <Item>
        Bad: <Span>{bad}</Span>
      </Item>
      <Item>
        Total: <Span>{total}</Span>
      </Item>
      <MainItem>
        Positive feedback:{' '}
        <MainSpan positivePercentage={positivePercentage}>
          {positivePercentage}%
        </MainSpan>
      </MainItem>
    </Box>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
