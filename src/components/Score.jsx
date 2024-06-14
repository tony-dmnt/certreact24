import QuestionLabel from "./QuestionLabel";
import AnswerList from "./AnswerList";

const Score = ({correct, total}) => {   
    const successRatio = correct/total;
    let className;
    if(successRatio >= 0.8) {
        className = "score-welldone";
    } else if(successRatio >= 0.4) {
        className = "score-tryharder";
    } else {
        className = "score-toobad";
    }
    return (
        <div className={className}>You scored {correct} out of {total}</div>
    );
}
export default Score;