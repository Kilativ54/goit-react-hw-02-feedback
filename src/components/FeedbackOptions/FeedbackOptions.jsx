import propTypes from 'prop-types';
import { BtnFeedback } from './FeedbackOptions.styled';
import { Container } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Container>
    {options.map((option, index) => (
      <BtnFeedback key={index} onClick={() => onLeaveFeedback(option)}>
        {option}
      </BtnFeedback>
    ))}
  </Container>
);

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
