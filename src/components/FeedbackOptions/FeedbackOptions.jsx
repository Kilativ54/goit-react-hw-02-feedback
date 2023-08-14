import propTypes from 'prop-types';
import {BtnFeedback} from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback })=> (
<div>
    {options.map((option, index) =>(
 <BtnFeedback
 key={index}
 onClick={() => onLeaveFeedback(option)}
 >
 {option}
</BtnFeedback>
    ))}
</div>
)

FeedbackOptions.propTypes = {
    options: propTypes.arrayOf(propTypes.string).isRequired,
    onLeaveFeedback: propTypes.func.isRequired,
  };