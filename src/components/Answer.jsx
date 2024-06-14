const Answer = ({answer, displayResult, handleClick}) => {
    let className = '';
    if(displayResult) {
        if(answer.isCorrect) {
            className = 'answer-result-good';
        } else {
            className = answer.isSelected ? 'answer-result-wrong' : 'answer-result-neutral';
        }
    } else {
        className = answer.isSelected ? 'answer-quiz-selected' : 'answer-quiz-unselected';
    }
    return (
        <button
            className={`button ${className}`}
            dangerouslySetInnerHTML={{__html: answer.label}}
            disabled={displayResult}
            onClick={() => handleClick(answer)}
            />
    );
}
export default Answer;