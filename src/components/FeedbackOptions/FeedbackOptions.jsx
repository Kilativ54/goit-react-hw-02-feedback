import PropTypes from 'prop-types';
import { BtnFeedback } from './FeedbackOptions.styled';
import { Container } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Container>
    {options.map(option => (
      <BtnFeedback key={option} name={option} onClick={onLeaveFeedback}>
        {option}
      </BtnFeedback>
    ))}
  </Container>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
